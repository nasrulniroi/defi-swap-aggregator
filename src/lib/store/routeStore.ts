import { create } from 'zustand';
interface RouteInfo { id: string; dex: string; output: string; gas: string; impact: string; optimal: boolean; }
interface RouteState { routes: RouteInfo[]; bestRoute: string | null; loading: boolean; setRoutes: (r: RouteInfo[]) => void; setBest: (id: string) => void; setLoading: (l: boolean) => void; }
export const useRouteStore = create<RouteState>((set) => ({
  routes: [], bestRoute: null, loading: false,
  setRoutes: (r) => set({ routes: r }), setBest: (id) => set({ bestRoute: id }), setLoading: (l) => set({ loading: l }),
}));
