import { create } from 'zustand';
interface SettingsState { slippage: number; deadline: number; expertMode: boolean; darkMode: boolean; setSlippage: (s: number) => void; setDeadline: (d: number) => void; toggleExpert: () => void; toggleDark: () => void; }
export const useSettingsStore = create<SettingsState>((set) => ({
  slippage: 0.5, deadline: 20, expertMode: false, darkMode: true,
  setSlippage: (s) => set({ slippage: s }), setDeadline: (d) => set({ deadline: d }),
  toggleExpert: () => set((s) => ({ expertMode: !s.expertMode })), toggleDark: () => set((s) => ({ darkMode: !s.darkMode })),
}));
