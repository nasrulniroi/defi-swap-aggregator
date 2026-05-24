const BASE_URL = '/api';
export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json();
}
export async function getQuote(from: string, to: string, amount: string) {
  return fetchApi(`/swap?from=${from}&to=${to}&amount=${amount}`);
}
export async function getRoutes(from: string, to: string, amount: string) {
  return fetchApi(`/routes?from=${from}&to=${to}&amount=${amount}`);
}
export async function getTokenPrice(symbol: string) {
  return fetchApi(`/price?token=${symbol}`);
}
export async function getGasEstimate() {
  return fetchApi('/gas');
}
