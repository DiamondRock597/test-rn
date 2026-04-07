import AsyncStorage from '@react-native-async-storage/async-storage';

export type LocalDataKeys = 'token' | 'isOnboardingShowed';

export const writeData = async <T>(key: LocalDataKeys, data: T) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const readData = async <T>(key: LocalDataKeys): Promise<T | null> => {
  const dataString = await AsyncStorage.getItem(key);
  if (dataString) {
    return JSON.parse(dataString);
  }
  return null;
};

export const clearStorage = async () => {
  await AsyncStorage.multiRemove(['token']);
};

export const deleteData = async (key: LocalDataKeys) => {
  await AsyncStorage.removeItem(key);
};
