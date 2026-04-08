import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Button } from '@components/button';
import { Input } from '@components/input';
import { Colors } from '@constants/colors';
import { Controller } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { useSignUp } from './useSignUp';

export const SignUpScreen = () => {
  const { control, errors, handleSubmit, onSubmit, loading, showPassword, goBack } = useSignUp();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Pressable style={styles.backButton} onPress={goBack}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>Complete the sign up to get started</Text>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              containerStyle={styles.field}
              label="Name"
              placeholder="Louis Real"
              placeholderTextColor={Colors.Placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              containerStyle={styles.field}
              label="Email"
              placeholder="Louis04real@gmail.com"
              placeholderTextColor={Colors.Placeholder}
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              containerStyle={styles.field}
              label="Password"
              placeholder="••••••••••••"
              placeholderTextColor={Colors.Placeholder}
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.password?.message}
              style={styles.passwordInput}
            />
          )}
        />

        <View style={styles.field}>
          <View style={styles.termsRow}>
            <Pressable style={styles.checkbox} onPress={() => {}} />
            <Text style={styles.termsText}>
              By signing up, you agree to the <Text style={styles.link}>Terms of Service</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.footerTextRow}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={goBack}>
            <Text style={styles.footerLink}> Sign in</Text>
          </Pressable>
        </View>

        <Button
          title={loading ? 'Creating...' : 'Create account'}
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
          loading={loading}
          style={styles.actionButton}
          textStyle={styles.actionButtonText}
        />
      </View>
    </SafeAreaView>
  );
};
