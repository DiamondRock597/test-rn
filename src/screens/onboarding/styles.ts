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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    alignItems: 'center'
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16
  },
  skipButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: Colors.White,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4
  },
  skipText: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.DarkBlue,
    fontFamily: FontFamily.Bold
  },
  card: {
    width: '100%',
    backgroundColor: Colors.White,
    borderRadius: 36,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 6
  },
  title: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: FontFamily.Bold,
    color: Colors.DarkText,
    textAlign: 'center',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.GrayText,
    textAlign: 'center',
    marginBottom: 36
  },
  illustration: {
    width: '95%',
    height: undefined,
    aspectRatio: 1,
    maxWidth: 360
  },
  imageWrapper: {
    width: '100%',
    alignItems: 'center'
  },
  paginationRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.LightGray,
    marginHorizontal: 6
  },
  paginationDotActive: {
    width: 20,
    backgroundColor: Colors.DarkBlue
  },
  actionButton: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.DarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.DarkBlue,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 4
  },
  actionButtonText: {
    color: Colors.White,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: FontFamily.Bold
  }
});
