import { StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';
import { FontFamily } from '@constants/fonts';

export const styles = StyleSheet.create({
  transactionCard: {
    width: '100%',
    backgroundColor: Colors.White,
    borderRadius: 28,
    paddingVertical: 18,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3
  },
  transactionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  transactionTitle: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    fontFamily: FontFamily.Bold,
    color: Colors.BlackText
  },
  transactionChevron: {
    fontSize: 20,
    color: Colors.GrayText
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18
  },
  transactionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 18,
    backgroundColor: Colors.LightPurple,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  transactionAvatarText: {
    fontSize: 15,
    fontFamily: FontFamily.Bold,
    color: Colors.Purple
  },
  transactionName: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: FontFamily.Bold,
    color: Colors.BlackText
  },
  transactionMeta: {
    fontSize: 13,
    lineHeight: 18,
    color: Colors.LightText,
    marginTop: 2
  },
  transactionInfo: {
    flex: 1
  },
  transactionAmountPositive: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FontFamily.Bold,
    color: Colors.Green
  },
  transactionAmountNegative: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FontFamily.Bold,
    color: Colors.BlackText
  }
});
