import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { AppStorage } from '../../services/storage';

export const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleFinishOnboarding = async () => {
    await AppStorage.setOnboardingShowed(true);
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Pressable style={styles.skipButton} onPress={handleFinishOnboarding}>
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>You ought to know where your money goes</Text>
          <Text style={styles.subtitle}>
            Get an overview of how you are performing and motivate yourself to achieve even more.
          </Text>

          <View style={styles.paginationRow}>
            <View style={styles.paginationDot} />
            <View style={[styles.paginationDot, styles.paginationDotActive]} />
            <View style={styles.paginationDot} />
          </View>

          <Pressable style={styles.actionButton} onPress={handleFinishOnboarding}>
            <Text style={styles.actionButtonText}>Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
