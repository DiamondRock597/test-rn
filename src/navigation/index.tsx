import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/types';
import { SignUpScreen } from '../screens/auth/sign-up';
import { OnboardingScreen } from '../screens/onboarding';
import { ProfileScreen } from '../screens/profile';
import { AppStorage } from '../services/storage';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const [initialRouteName, setInitialRouteName] = React.useState<keyof RootStackParamList | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const isOnboardingShowed = await AppStorage.getOnboardingShowed();

      if (isOnboardingShowed) {
        setInitialRouteName('SignUp');
      }
    })().catch(() => {
      setInitialRouteName('Onboarding');
    });
  }, []);

  const screenOptions = useMemo(() => ({ headerShown: false }), []);

  if (!initialRouteName) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Stack.Navigator id="root" initialRouteName={initialRouteName} screenOptions={screenOptions}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
