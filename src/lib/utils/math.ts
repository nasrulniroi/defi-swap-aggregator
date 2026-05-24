export function calculatePriceImpact(inputAmount: number, outputAmount: number, marketPrice: number): number {
  const expectedOutput = inputAmount * marketPrice;
  return ((expectedOutput - outputAmount) / expectedOutput) * 100;
}
export function calculateSlippage(expectedAmount: number, minAmount: number): number {
  return ((expectedAmount - minAmount) / expectedAmount) * 100;
}
export function calculateGasCost(gasUnits: number, gasPrice: number, ethPrice: number): number {
  return (gasUnits * gasPrice * ethPrice) / 1e18;
}
export function applySlippage(amount: number, slippagePercent: number): number {
  return amount * (1 - slippagePercent / 100);
}
export function getAmountOut(amountIn: number, reserveIn: number, reserveOut: number, fee: number): number {
  const amountInWithFee = amountIn * (1 - fee);
  return (amountInWithFee * reserveOut) / (reserveIn + amountInWithFee);
}
