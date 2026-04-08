import { clearStorage, deleteData, readData, writeData } from '../storage';

export class AuthStorage {
  static token: string;

  static async saveTokens(token: string) {
    AuthStorage.token = token;

    await writeData('token', token);
  }

  static async getAccessToken() {
    if (AuthStorage.token) {
      return AuthStorage.token;
    }

    const token = await readData<string>('token');
    if (token) {
      AuthStorage.token = token;
    }

    return token ?? null;
  }

  static async removeTokens() {
    AuthStorage.token = '';
    await deleteData('token');
  }

  static async signOut() {
    AuthStorage.token = '';
    await clearStorage();
  }
}
