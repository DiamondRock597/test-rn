import React, { memo } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, ViewStyle } from 'react-native';

import { Colors } from '@constants/colors';
import { FontFamily } from '@constants/fonts';

interface InputProps extends Omit<TextInputProps, 'style'> {
  style?: ViewStyle;
  label?: string;
  error?: string;
}

export const Input = memo(({ style, label, error, ...props }) => {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={[styles.input, error && styles.error, style]} {...props} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
});

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.Border,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: Colors.Background,
    fontFamily: FontFamily.Regular
  },
  error: {
    borderColor: Colors.Error
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: Colors.Text,
    fontFamily: FontFamily.Medium
  },
  errorText: {
    fontSize: 14,
    color: Colors.Error,
    marginTop: 4,
    fontFamily: FontFamily.Regular
  }
});
