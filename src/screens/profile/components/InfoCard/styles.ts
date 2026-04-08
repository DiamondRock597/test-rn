import { StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';
import { FontFamily } from '@constants/fonts';

export const styles = StyleSheet.create({
  infoCard: {
    width: '100%',
    backgroundColor: Colors.White,
    borderRadius: 28,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18
  },
  infoLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.LightText
  },
  infoValue: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.BlackText,
    fontFamily: FontFamily.Bold
  },
  balanceValue: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.Green,
    fontFamily: FontFamily.Bold
  }
});
