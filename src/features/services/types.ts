export interface ApiResponse {
  success: boolean;
  message: string;
  totalCount?: number;
  data: any;
}
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}