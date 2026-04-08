import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSharedValue, withTiming } from 'react-native-reanimated';

import { AppStorage } from '../../services/storage';

const pages = [0, 1, 2];

export const useOnboarding = () => {
  const navigation = useNavigation<any>();
  const [activePage, setActivePage] = useState(0);
  const activeIndex = useSharedValue(0);

  useEffect(() => {
    activeIndex.value = withTiming(activePage, { duration: 250 });
  }, [activePage, activeIndex]);

  const handleFinishOnboarding = async () => {
    await AppStorage.setOnboardingShowed(true);
    navigation.navigate('SignUp');
  };

  const handleNext = async () => {
    if (activePage < pages.length - 1) {
      setActivePage(prev => prev + 1);
      return;
    }

    await handleFinishOnboarding();
  };

  return {
    activeIndex,
    pages,
    handleFinishOnboarding,
    handleNext
  };
};
