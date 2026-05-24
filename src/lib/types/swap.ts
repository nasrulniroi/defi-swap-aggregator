export interface SwapParams {
  fromToken: string;
  toToken: string;
  amount: string;
  slippage: number;
  deadline: number;
}
export interface SwapResult {
  outputAmount: string;
  priceImpact: number;
  gasEstimate: string;
  route: RouteStep[];
}
export interface RouteStep {
  dex: string;
  pair: string;
  percentage: number;
  inputAmount: string;
  outputAmount: string;
}
