export interface Pool {
  id: string;
  token0: string;
  token1: string;
  dex: string;
  fee: number;
  tvl: string;
  volume24h: string;
  apr: number;
  address: string;
}
export interface PoolStats {
  totalTvl: string;
  totalVolume: string;
  poolCount: number;
  avgApr: number;
}
