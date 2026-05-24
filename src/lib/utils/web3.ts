export function shortenAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}
export function parseUnits(value: string, decimals: number): string {
  const [whole, fraction = ''] = value.split('.');
  const paddedFraction = fraction.padEnd(decimals, '0').slice(0, decimals);
  return `${whole}${paddedFraction}`;
}
export function formatUnits(value: string, decimals: number): string {
  const padded = value.padStart(decimals + 1, '0');
  const whole = padded.slice(0, -decimals);
  const fraction = padded.slice(-decimals).replace(/0+$/, '');
  return fraction ? `${whole}.${fraction}` : whole;
}
export function getExplorerUrl(chainId: number, hash: string, type: 'tx' | 'address' = 'tx'): string {
  const explorers: Record<number, string> = { 1: 'etherscan.io', 56: 'bscscan.com', 137: 'polygonscan.com', 42161: 'arbiscan.io' };
  return `https://${explorers[chainId] || 'etherscan.io'}/${type}/${hash}`;
}
