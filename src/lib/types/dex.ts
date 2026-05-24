export type DexName = 'uniswap_v2' | 'uniswap_v3' | 'sushiswap' | 'curve' | 'oneinch' | 'balancer';
export interface DexConfig {
  name: DexName;
  displayName: string;
  routerAddress: string;
  factoryAddress: string;
  chainId: number;
  fee: number;
  enabled: boolean;
}
export interface DexQuote {
  dex: DexName;
  inputAmount: string;
  outputAmount: string;
  gasEstimate: string;
  priceImpact: number;
  route: string[];
}
