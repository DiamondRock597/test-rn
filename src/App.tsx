import React from 'react';
import { useColorScheme } from 'react-native';

import { Assets as NavigationAssets } from '@react-navigation/elements';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';

import { RootNavigator } from './navigation';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png')
]);

SplashScreen.preventAutoHideAsync();

export const App = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer
      theme={theme}
      onReady={() => {
        SplashScreen.hideAsync();
      }}>
      <RootNavigator />
    </NavigationContainer>
  );
}
