import { readData, writeData } from '../storage';

export class AppStorage {
  static isOnboardingShowed: boolean | null = null;

  static async setOnboardingShowed(value = true) {
    AppStorage.isOnboardingShowed = value;
    await writeData('isOnboardingShowed', value);
  }

  static async getOnboardingShowed() {
    if (AppStorage.isOnboardingShowed !== null) {
      return AppStorage.isOnboardingShowed;
    }

    const value = await readData<boolean>('isOnboardingShowed');

    if (value !== null) {
      AppStorage.isOnboardingShowed = value;
    }

    return value ?? false;
  }
}
