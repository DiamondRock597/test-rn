import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PaginationDot } from './components/PaginationDot';
import { styles } from './styles';
import { useOnboarding } from './useOnboarding';

export const OnboardingScreen = () => {
  const { activeIndex, pages, handleFinishOnboarding, handleNext } = useOnboarding();
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.safeArea, { paddingTop: top }]}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Pressable style={styles.skipButton} onPress={handleFinishOnboarding}>
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        </View>

        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/onboarding.png')}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        <View style={styles.card}>
          <Text numberOfLines={2} adjustsFontSizeToFit style={styles.title}>
            You ought to know where your money goes
          </Text>
          <Text adjustsFontSizeToFit style={styles.subtitle}>
            Get an overview of how you are performing and motivate yourself to achieve even more.
          </Text>

          <View style={styles.paginationRow}>
            {pages.map(page => (
              <PaginationDot key={page} index={page} activeIndex={activeIndex} />
            ))}
          </View>

          <Pressable style={styles.actionButton} onPress={handleNext}>
            <Text style={styles.actionButtonText}>Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
