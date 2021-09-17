import type { KratosError, KratosForm, KratosLogout } from "$lib/kratos";

export interface LoadOutput {
  status?: number;
  redirect?: string;
  props?: {
    [key: string]: string | KratosError | KratosForm | KratosLogout;
  };
}
