import { API } from '../api';
import { BasicAuthCredentials } from '../models/auth';
import { AccountResponse } from '../models/profile';

export class ProfileApi {
  static async getProfile(params: BasicAuthCredentials) {
    const { data } = await API.get<AccountResponse>('/interview/account', {
      withCredentials: true,
      auth: {
        username: params.username,
        password: params.password
      }
    });

    return data;
  }
}
