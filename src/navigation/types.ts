import { BasicAuthCredentials } from '../services/api/models/auth';

export type RootStackParamList = {
  Onboarding: undefined;
  SignUp: undefined;
  Profile: { basicAuthCredentials: BasicAuthCredentials };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
