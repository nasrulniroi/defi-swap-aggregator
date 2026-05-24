# DeFi Swap Aggregator

**🚀 [Live Demo](https://defi-swap-aggregator.vercel.app)**

A comprehensive multi-DEX swap routing engine that finds the best token swap rates across major decentralized exchanges. The platform aggregates liquidity from Uniswap V3, SushiSwap, Curve Finance, Balancer, and 1inch to deliver optimal execution paths with minimal price impact and slippage.

## Overview

The DeFi Swap Aggregator is a production-grade trading intelligence platform that solves the fragmentation problem in decentralized finance. When a user wants to swap Token A for Token B, the price can vary significantly across different DEX protocols. Our routing engine analyzes all possible paths—including multi-hop routes through intermediate tokens—to find the most cost-effective execution strategy.

### Key Highlights

- **Multi-DEX Aggregation**: Routes swaps across 5 major DEX protocols for best rates
- **Intelligent Pathfinding**: Graph-based algorithm finds optimal multi-hop routes
- **Price Impact Analysis**: Real-time calculation of price impact with severity warnings
- **MEV Protection**: Integration with Flashbots Protect for sandwich attack prevention
- **Gas Optimization**: Estimates and optimizes gas costs across all route options
- **Split Routing**: Divides large orders across multiple pools for better execution
- **Real-time Analytics**: Live price charts, volume tracking, and liquidity depth visualization

## Architecture

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS | Server-rendered UI with App Router |
| Charts | Chart.js, react-chartjs-2 | Price, volume, and TVL visualization |
| State | Zustand, React Query | Client and server state management |
| Backend | Python 3.11+ | Price feeds, gas tracking, route optimization |
| Scanner | Go 1.21+ | High-performance blockchain event scanning |
| Database | PostgreSQL | Swap history, analytics, and caching |
| Styling | Tailwind CSS (Indigo theme) | Consistent design system |
| Wallet | RainbowKit, wagmi, viem | Web3 wallet connection |

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ │
│  │Swap Page │ │Analytics │ │ History  │ │Token/Pools │ │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘ │
├─────────────────────────────────────────────────────────┤
│                   State Management                       │
│  ┌──────────┐ ┌──────────────┐ ┌──────────────────────┐│
│  │  Zustand │ │  React Query │ │  WebSocket (live)    ││
│  └──────────┘ └──────────────┘ └──────────────────────┘│
├─────────────────────────────────────────────────────────┤
│                    API Layer (Next.js)                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐│
│  │/api/swap │ │/api/route│ │/api/pools│ │/api/tokens ││
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘│
├─────────────────────────────────────────────────────────┤
│                  Backend Services                         │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────┐│
│  │Python Engine │ │ Go Scanner   │ │ PostgreSQL DB    ││
│  │Route Finding │ │Event Monitor │ │ History/Cache    ││
│  └──────────────┘ └──────────────┘ └──────────────────┘│
├─────────────────────────────────────────────────────────┤
│              Blockchain Data Sources                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐│
│  │Uniswap V3│ │SushiSwap │ │  Curve   │ │  Balancer  ││
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘│
└─────────────────────────────────────────────────────────┘
```

## Features

### Swap Interface
The main swap interface provides a familiar trading experience similar to popular DEX aggregators. Users connect their wallet, select input/output tokens, and the engine automatically finds the best route.

**Route Selection Algorithm:**
1. Query all supported DEX pools for token pair liquidity
2. Calculate direct routes across each DEX
3. Generate multi-hop routes through intermediate tokens (WETH, USDC, USDT, DAI)
4. Estimate gas costs for each route option
5. Rank routes by net output (output minus gas cost in USD)
6. Present top 3 routes with detailed breakdown

### Price Impact Protection
Price impact is calculated as the difference between the quoted price and the effective execution price given the trade size. The system categorizes impact as:

- **Low (< 0.5%)**: Green indicator, safe to execute
- **Medium (0.5% - 2%)**: Yellow indicator, review recommended
- **High (2% - 5%)**: Orange indicator, significant slippage expected
- **Severe (> 5%)**: Red indicator, trade not recommended

### Multi-Hop Routing
For illiquid pairs, the engine discovers routes through intermediate tokens. For example, swapping TOKEN-A → TOKEN-B might be more efficient as TOKEN-A → WETH → USDC → TOKEN-B if the direct pool has insufficient liquidity.

The pathfinding algorithm uses a modified Dijkstra's algorithm weighted by:
- Output amount (primary)
- Gas cost (secondary)
- Number of hops (tertiary, fewer is better)
- Pool reliability score (quaternary)

### MEV Protection
Large trades are vulnerable to sandwich attacks where MEV bots front-run and back-run transactions. Our integration with Flashbots Protect routes transactions through private mempools, preventing:
- Front-running attacks
- Sandwich attacks
- Transaction ordering manipulation

### Analytics Dashboard
Real-time analytics provide insights into:
- Token price charts (1H, 1D, 1W, 1M, 1Y)
- Trading volume by DEX and token pair
- TVL (Total Value Locked) per protocol
- Historical gas price trends
- Popular swap routes
- Arbitrage opportunity detection

## Project Structure

```
defi-swap-aggregator/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Home / Swap page
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── globals.css         # Global styles (indigo theme)
│   │   ├── analytics/          # Analytics dashboard
│   │   ├── history/            # Transaction history
│   │   ├── pools/              # Pool explorer
│   │   ├── routes/             # Route visualizer
│   │   ├── tokens/             # Token list
│   │   ├── settings/           # User settings
│   │   └── api/                # API routes
│   │       ├── swap/           # Swap quote endpoint
│   │       ├── routes/         # Route calculation
│   │       ├── pools/          # Pool data
│   │       ├── tokens/         # Token metadata
│   │       └── analytics/      # Analytics data
│   ├── components/             # React components
│   │   ├── ui/                 # Base UI components
│   │   ├── swap/               # Swap-specific components
│   │   ├── charts/             # Chart components
│   │   ├── wallet/             # Wallet connection
│   │   └── layout/             # Layout components
│   ├── lib/                    # Core libraries
│   │   ├── hooks/              # Custom React hooks
│   │   ├── stores/             # Zustand stores
│   │   ├── utils/              # Utility functions
│   │   ├── types/              # TypeScript types
│   │   └── constants/          # Configuration constants
│   └── providers/              # Context providers
├── backend/                    # Python backend
│   ├── price_feed.py           # Real-time price feeds
│   ├── gas_tracker.py          # Gas price monitoring
│   ├── route_optimizer.py      # Route optimization engine
│   ├── pool_monitor.py         # Pool liquidity monitoring
│   ├── arbitrage_detector.py   # Arbitrage opportunity finder
│   ├── mev_protection.py       # MEV protection utilities
│   ├── api_server.py           # FastAPI server
│   ├── models/                 # Data models
│   ├── services/               # Business logic
│   └── utils/                  # Backend utilities
├── go-scanner/                 # Go blockchain scanner
│   ├── main.go                 # Scanner entry point
│   ├── scanner/                # Core scanner logic
│   ├── indexer/                # Event indexer
│   ├── models/                 # Data models
│   └── config/                 # Configuration
├── database/                   # Database schemas
│   ├── migrations/             # Schema migrations
│   ├── seeds/                  # Seed data
│   └── queries/                # Common queries
├── scripts/                    # Build & deploy scripts
├── docs/                       # Documentation
├── tests/                      # Test suites
│   ├── e2e/                    # End-to-end tests
│   ├── integration/            # Integration tests
│   └── unit/                   # Unit tests
├── config/                     # Configuration files
├── AGENTS.md                   # AI agent guidelines
├── CLAUDE.md                   # Claude Code instructions
├── LICENSE                     # MIT License
└── README.md                   # This file
```

## Supported DEX Protocols

### Uniswap V3
The most popular DEX with concentrated liquidity. Our integration supports:
- All fee tiers (0.01%, 0.05%, 0.3%, 1%)
- Multi-hop routing through multiple pools
- Tick-level liquidity analysis
- Flash swap integration

### SushiSwap
A Uniswap fork with additional features:
- Kashi lending integration
- Trident pool types
- Cross-chain deployments
- Reward token routing

### Curve Finance
Optimized for stablecoin and pegged asset swaps:
- StableSwap algorithm for minimal slippage
- Meta-pools for cross-asset routing
- Gauge voting integration
- veCRV boost calculations

### Balancer
Weighted and stable pool DEX:
- Custom token weight pools
- Composable stable pools
- Linear pools for boosted yield
- Batch swap optimization

### 1inch
Aggregation protocol API:
- Pathfinder routing algorithm
- Fusion mode for gasless swaps
- Limit order support
- Partial fill optimization

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Python 3.11+ with pip
- Go 1.21+
- PostgreSQL 15+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/nasrulniroi/defi-swap-aggregator.git
cd defi-swap-aggregator

# Install frontend dependencies
npm install

# Install Python backend dependencies
cd backend && pip install -r requirements.txt && cd ..

# Build Go scanner
cd go-scanner && go build -o scanner . && cd ..

# Set up database
psql -c "CREATE DATABASE swap_aggregator"
psql -d swap_aggregator < database/migrations/001_initial.sql

# Configure environment
cp .env.example .env
# Edit .env with your API keys

# Start development server
npm run dev
```

### Environment Variables

```env
# Blockchain RPC
ETHEREUM_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
POLYGON_RPC_URL=https://polygon-mainnet.g.alchemy.com/v2/YOUR_KEY

# DEX APIs
UNISWAP_V3_SUBGRAPH=https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3
SUSHISWAP_API=https://api.sushi.com
CURVE_API=https://api.curve.fi
BALANCER_API=https://api.balancer.fi
ONEINCH_API=https://api.1inch.dev

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/swap_aggregator

# MEV Protection
FLASHBOTS_RELAY_URL=https://relay.flashbots.net
FLASHBOTS_KEY=your_signing_key

# Price Feeds
COINGECKO_API_KEY=your_key
CHAINLINK_ETH_USD=0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
```

## API Documentation

### GET /api/swap/quote
Get a swap quote with optimal routing.

**Parameters:**
- `tokenIn` (string): Input token address
- `tokenOut` (string): Output token address
- `amount` (string): Input amount in wei
- `slippage` (number): Slippage tolerance in basis points (default: 50)

**Response:**
```json
{
  "route": {
    "path": ["0xA0b8...", "0xC02a...", "0xdAC1..."],
    "protocols": ["Uniswap V3", "Curve"],
    "hops": 2
  },
  "quote": {
    "inputAmount": "1000000000000000000",
    "outputAmount": "1823456789012345678",
    "priceImpact": 0.12,
    "gasEstimate": 185000,
    "gasCostUSD": 4.23,
    "minimumReceived": "1814339005067284489"
  },
  "alternatives": [...]
}
```

### GET /api/pools
List available liquidity pools with TVL and volume data.

### GET /api/tokens
List supported tokens with prices and metadata.

### GET /api/analytics/volume
Get historical volume data for charts.

## Testing

```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Go scanner tests
cd go-scanner && go test ./...

# Python backend tests
cd backend && pytest
```

## Deployment

### Vercel (Recommended)

The project is configured for one-click deployment on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker

```bash
docker-compose up -d
```

### Manual

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security

- All smart contract interactions are read-only from the frontend
- No private keys are stored or transmitted
- MEV protection via private mempool routing
- Slippage protection prevents excessive price impact
- Rate limiting on all API endpoints

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Uniswap for the V3 concentrated liquidity model
- Curve Finance for the StableSwap invariant
- Flashbots for MEV protection infrastructure
- The Graph for indexed blockchain data
- Etherscan for blockchain exploration APIs
