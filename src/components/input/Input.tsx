import React, { forwardRef, memo } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';

import { Colors } from '@constants/colors';
import { FontFamily } from '@constants/fonts';

interface InputProps extends Omit<TextInputProps, 'style'> {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  label?: string;
  error?: string;
  loading?: boolean;
  rightElement?: React.ReactNode;
}

const InputInner = forwardRef<TextInput, InputProps>(
  ({ containerStyle, style, label, error, loading, rightElement, ...props }, ref) => (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.inputWrapper, error && styles.errorWrapper]}>
        <TextInput ref={ref} style={[styles.input, style]} {...props} />
        {rightElement ? <View style={styles.rightElement}>{rightElement}</View> : null}
        {loading ? <ActivityIndicator color={Colors.Gray700} style={styles.loader} /> : null}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  )
);

export const Input = memo(InputInner);

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Border,
    borderRadius: 18,
    backgroundColor: Colors.White,
    paddingHorizontal: 16,
    minHeight: 56
  },
  errorWrapper: {
    borderColor: Colors.Error
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.Text,
    paddingVertical: 16,
    fontFamily: FontFamily.Regular
  },
  rightElement: {
    marginLeft: 10
  },
  loader: {
    marginLeft: 10
  },
  label: {
    fontSize: 13,
    lineHeight: 20,
    color: Colors.GrayText,
    marginBottom: 10,
    fontFamily: FontFamily.Medium
  },
  errorText: {
    marginTop: 6,
    color: Colors.Error,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FontFamily.Regular
  }
});
