import { StyleSheet } from 'react-native';

import { Colors } from '@constants/colors';
import { FontFamily } from '@constants/fonts';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.LightBlue
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 2
  },
  backIcon: {
    fontSize: 20,
    color: Colors.BlackText
  },
  screenTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 22,
    fontFamily: FontFamily.Bold,
    color: Colors.BlackText
  },
  headerSpacer: {
    width: 42
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24
  },
  avatarWrapper: {
    width: 76,
    height: 76,
    borderRadius: 20,
    backgroundColor: Colors.Purple,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3
  },
  avatarInitials: {
    color: Colors.White,
    fontSize: 32,
    fontFamily: FontFamily.Bold
  },
  profileName: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: FontFamily.Bold,
    color: Colors.BlackText
  },
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
  },
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
