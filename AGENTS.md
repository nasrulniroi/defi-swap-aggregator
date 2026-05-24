# AGENTS.md - DeFi Swap Aggregator

## Project Overview
A comprehensive DeFi swap aggregator that finds the best swap routes across multiple DEX protocols.

## Architecture
- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS (indigo theme)
- **State Management**: Zustand stores for swap, tokens, routes, settings
- **Charts**: Chart.js with react-chartjs-2 for price/volume/TVL visualization
- **Routing Engine**: Multi-hop path finding with gas optimization
- **Backend Scripts**: Python for price feeds, gas tracking, route optimization
- **Scanner**: Go-based blockchain scanner for real-time pool monitoring
- **Database**: PostgreSQL with SQL schemas for swap history and analytics

## Supported DEX Protocols
1. **Uniswap V2/V3** - AMM with concentrated liquidity
2. **SushiSwap** - Fork of Uniswap with additional features
3. **Curve Finance** - Stablecoin-optimized AMM
4. **1inch** - DEX aggregator API
5. **Balancer** - Weighted pool AMM

## Key Features
- Best route finder across all supported DEXes
- Price impact calculation with warnings
- Slippage protection with customizable tolerance
- Multi-hop routing for optimal execution
- Gas estimation and optimization
- Real-time price charts and analytics
- Wallet connection via RainbowKit
- Transaction history tracking

## Development Guidelines
- Use TypeScript strict mode
- Follow Tailwind CSS utility-first approach
- Use Zustand for client state, React Query for server state
- All API routes must include proper error handling
- Components should be in their respective feature directories
- Use the indigo (#818cf8) color scheme consistently

## File Organization
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - React components organized by feature
- `src/lib/` - Core logic, utilities, hooks, and stores
- `src/providers/` - Context providers
- `backend/` - Python backend scripts
- `go-scanner/` - Go blockchain scanner
- `database/` - SQL schemas and migrations
- `scripts/` - Build and deployment scripts
- `docs/` - Documentation
