import React, { useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { Assets as NavigationAssets } from '@react-navigation/elements';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
  require('./assets/onboarding.png')
]);

SplashScreen.preventAutoHideAsync();

export const App = () => {
  const colorScheme = useColorScheme();
  const theme = useMemo(() => (colorScheme === 'dark' ? DarkTheme : DefaultTheme), [colorScheme]);

  // const [fontsLoaded] = useFonts({
  //   [FontFamily.Regular]: Inter_400Regular,
  //   [FontFamily.Medium]: Inter_500Medium,
  //   [FontFamily.Bold]: Inter_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return null; // Или SplashScreen
  // }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={theme}
        onReady={() => {
          SplashScreen.hideAsync();
        }}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
