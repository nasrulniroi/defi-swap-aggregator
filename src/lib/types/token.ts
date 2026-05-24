export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
  chainId: number;
  price?: number;
  change24h?: number;
}
export interface TokenPair {
  token0: Token;
  token1: Token;
}
export interface TokenBalance {
  token: Token;
  balance: string;
  usdValue: string;
}
