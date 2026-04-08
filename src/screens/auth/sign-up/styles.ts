import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7FF'
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    alignItems: 'center'
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    alignSelf: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4
  },
  backIcon: {
    fontSize: 20,
    color: '#101828'
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '700',
    color: '#3B3BFF',
    marginBottom: 8,
    alignSelf: 'flex-start'
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#667085',
    marginBottom: 24,
    alignSelf: 'flex-start'
  },
  field: {
    width: '100%',
    marginBottom: 16
  },
  passwordInput: {
    paddingRight: 50
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#101828',
    paddingVertical: 16,
    paddingRight: 8
  },
  eyeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#3B3BFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  eyeIcon: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  termsRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
    marginBottom: 28
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    marginTop: 3,
    marginRight: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxIcon: {
    color: '#3B3BFF',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700'
  },
  termsText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    color: '#475467'
  },
  link: {
    color: '#3B3BFF'
  },
  footerTextRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 28
  },
  footerText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#101828'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 20,
    color: '#3B3BFF',
    fontWeight: '600'
  },
  errorText: {
    marginTop: 6,
    color: '#EF4444',
    fontSize: 12,
    lineHeight: 16
  },
  actionButton: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3633FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#3633FF',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 4
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700'
  },
  footerContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32
  }
});
