import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { InfoCard } from './components/InfoCard';
import { TransactionCard } from './components/TransactionCard';
import { styles } from './styles';
import { useProfile } from './useProfile';

export const ProfileScreen = () => {
  const { account, formatCurrency, getInitials, transactionItems } = useProfile();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.screenTitle}>My Account</Text>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <Text style={styles.avatarInitials}>
              {account ? getInitials(account.accountType) : 'K'}
            </Text>
          </View>
          <Text style={styles.profileName}>Kuda Bank</Text>
        </View>

        {account && <InfoCard account={account} formatCurrency={formatCurrency} />}

        <TransactionCard transactionItems={transactionItems} />
      </ScrollView>
    </SafeAreaView>
  );
};
