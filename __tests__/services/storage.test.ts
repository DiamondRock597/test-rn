import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthStorage } from '../../src/services/storage/domains/auth';
import { clearStorage, deleteData, readData, writeData } from '../../src/services/storage/storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  multiRemove: jest.fn()
}));

const mockedAsyncStorage = AsyncStorage as any;

describe('storage helpers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    AuthStorage.token = '';
  });

  it('writes JSON data to AsyncStorage', async () => {
    await writeData('token', 'my-token');

    expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith('token', JSON.stringify('my-token'));
  });

  it('reads and parses JSON data from AsyncStorage when a value exists', async () => {
    mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify('my-token'));

    const result = await readData<string>('token');

    expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith('token');
    expect(result).toBe('my-token');
  });

  it('returns null when AsyncStorage returns no value', async () => {
    mockedAsyncStorage.getItem.mockResolvedValueOnce(null);

    const result = await readData<string>('token');

    expect(result).toBeNull();
  });

  it('clears token key from AsyncStorage', async () => {
    await clearStorage();

    expect(mockedAsyncStorage.multiRemove).toHaveBeenCalledWith(['token']);
  });

  it('deletes a specific key from AsyncStorage', async () => {
    await deleteData('token');

    expect(mockedAsyncStorage.removeItem).toHaveBeenCalledWith('token');
  });
});

describe('AuthStorage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    AuthStorage.token = '';
  });

  it('saves token to the cache and AsyncStorage', async () => {
    await AuthStorage.saveTokens('cached-token');

    expect(AuthStorage.token).toBe('cached-token');
    expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith(
      'token',
      JSON.stringify('cached-token')
    );
  });

  it('returns cached token without calling AsyncStorage', async () => {
    AuthStorage.token = 'cached-token';

    const result = await AuthStorage.getAccessToken();

    expect(result).toBe('cached-token');
    expect(mockedAsyncStorage.getItem).not.toHaveBeenCalled();
  });

  it('loads token from AsyncStorage when no cache exists', async () => {
    mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify('stored-token'));

    const result = await AuthStorage.getAccessToken();

    expect(result).toBe('stored-token');
    expect(AuthStorage.token).toBe('stored-token');
  });

  it('removes token cache and storage when removeTokens is called', async () => {
    AuthStorage.token = 'cached-token';

    await AuthStorage.removeTokens();

    expect(AuthStorage.token).toBe('');
    expect(mockedAsyncStorage.removeItem).toHaveBeenCalledWith('token');
  });

  it('signs out by clearing cache and storage', async () => {
    AuthStorage.token = 'cached-token';

    await AuthStorage.signOut();

    expect(AuthStorage.token).toBe('');
    expect(mockedAsyncStorage.multiRemove).toHaveBeenCalledWith(['token']);
  });
});
