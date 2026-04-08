import React, { memo } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

import { Colors } from '@constants/colors';
import { FontFamily } from '@constants/fonts';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = memo(
  ({ title, onPress, disabled = false, loading = false, style, textStyle }) => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        style={[styles.button, disabled && styles.disabled, style]}
        onPress={onPress}
        disabled={disabled || loading}>
        {loading ? (
          <ActivityIndicator color={Colors.White} />
        ) : (
          <Text style={[styles.text, textStyle]}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabled: {
    opacity: 0.5
  },
  text: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FontFamily.Medium
  }
});
