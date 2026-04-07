export type RootStackParamList = {
  Onboarding: undefined;
  SignUp: undefined;
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
