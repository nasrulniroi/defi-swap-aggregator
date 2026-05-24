# CLAUDE.md - DeFi Swap Aggregator

## Quick Start
```bash
npm install
npm run dev
```

## Architecture Notes
This is a Next.js 14 App Router project with TypeScript strict mode.

### Styling
- Tailwind CSS with custom indigo theme (#818cf8 primary)
- Dark theme with surface colors: #0f0f23, #1a1a3e, #252547
- Use `cn()` utility from `@/lib/utils` for conditional classes

### State Management
- Zustand stores in `src/lib/store/`
- React Query for API data fetching
- Context providers in `src/providers/`

### API Routes
- All in `src/app/api/` using Next.js Route Handlers
- RESTful design with proper status codes
- Error handling with try-catch blocks

### Components
- Organized by feature: swap/, pools/, charts/, common/
- Use `forwardRef` for form components
- Proper TypeScript interfaces for all props

### DEX Integration
- Each DEX has its own module in `src/lib/dex/`
- Router uses Dijkstra's algorithm for path finding
- Gas estimation considers current network conditions

## Testing
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## Deployment
- Vercel for frontend
- Docker Compose for local full-stack development
- GitHub Actions CI/CD pipeline
