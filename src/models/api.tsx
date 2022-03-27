export interface IApiResponse {
  status: number;
  statusText: string;
  data?: any;
  error?: {
    code: number;
    message: string;
  };
}
