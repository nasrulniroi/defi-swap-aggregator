import { create } from 'zustand';
interface SwapState {
  fromToken: string; toToken: string; amount: string; slippage: number; outputAmount: string; isLoading: boolean;
  setFromToken: (t: string) => void; setToToken: (t: string) => void; setAmount: (a: string) => void;
  setSlippage: (s: number) => void; setOutputAmount: (o: string) => void; setIsLoading: (l: boolean) => void;
  swapTokens: () => void;
}
export const useSwapStore = create<SwapState>((set) => ({
  fromToken: 'ETH', toToken: 'USDC', amount: '', slippage: 0.5, outputAmount: '', isLoading: false,
  setFromToken: (t) => set({ fromToken: t }), setToToken: (t) => set({ toToken: t }),
  setAmount: (a) => set({ amount: a }), setSlippage: (s) => set({ slippage: s }),
  setOutputAmount: (o) => set({ outputAmount: o }), setIsLoading: (l) => set({ isLoading: l }),
  swapTokens: () => set((s) => ({ fromToken: s.toToken, toToken: s.fromToken, amount: s.outputAmount, outputAmount: s.amount })),
}));
