export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
export function isValidAmount(amount: string): boolean {
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0;
}
export function isValidSlippage(slippage: number): boolean {
  return slippage > 0 && slippage <= 50;
}
export function isValidChainId(chainId: number): boolean {
  return [1, 56, 137, 42161, 10, 43114].includes(chainId);
}
