import { ResponseBase } from '.';

export interface LoginResponse extends ResponseBase {
  data: {
    token: string;
  }
}
