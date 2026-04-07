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
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4
  },
  skipText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#3B3BFF',
    fontWeight: '700'
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
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
    fontWeight: '700',
    color: '#24167A',
    textAlign: 'center',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#667085',
    textAlign: 'center',
    marginBottom: 36
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
    backgroundColor: '#CBD5E1',
    marginHorizontal: 4
  },
  paginationDotActive: {
    width: 20,
    backgroundColor: '#3B3BFF'
  },
  actionButton: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3B3BFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B3BFF',
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
  }
});
