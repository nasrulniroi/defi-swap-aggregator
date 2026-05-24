import { create } from 'zustand';
interface TokenInfo { symbol: string; name: string; price: number; balance: string; }
interface TokenState { tokens: TokenInfo[]; selectedToken: string | null; searchQuery: string; setTokens: (t: TokenInfo[]) => void; setSelected: (s: string | null) => void; setSearch: (q: string) => void; }
export const useTokenStore = create<TokenState>((set) => ({
  tokens: [], selectedToken: null, searchQuery: '',
  setTokens: (t) => set({ tokens: t }), setSelected: (s) => set({ selectedToken: s }), setSearch: (q) => set({ searchQuery: q }),
}));
