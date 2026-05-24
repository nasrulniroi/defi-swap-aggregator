export interface Route {
  id: string;
  steps: RouteStepInfo[];
  inputAmount: string;
  outputAmount: string;
  gasEstimate: string;
  priceImpact: number;
  confidence: number;
}
export interface RouteStepInfo {
  dex: string;
  pool: string;
  tokenIn: string;
  tokenOut: string;
  amountIn: string;
  amountOut: string;
  fee: number;
}
export interface RouteComparison {
  routes: Route[];
  bestRoute: Route;
  savings: string;
}
