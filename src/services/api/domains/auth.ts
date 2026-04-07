import { API } from '../api';
import { SignUpParams } from '../models/auth';

export class AuthApi {
  static async signUp(params: SignUpParams, headers?: Record<string, any>) {
    const { data } = await API.post('/signup', params, headers);

    return data;
  }
}
