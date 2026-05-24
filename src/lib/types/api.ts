export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  pageSize: number;
  total: number;
}
export interface PriceResponse {
  token: string;
  price: number;
  change24h: number;
  lastUpdated: string;
}
