export interface LoadOutput {
  status?: number;
  redirect?: string;
  props?: {
    [key: string]: string;
  };
}
