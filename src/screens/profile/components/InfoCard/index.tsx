import React, { memo } from 'react';
import { View } from 'react-native';

import { AccountResponse } from '@/services/api/models/profile';

import { InfoRow } from './InfoRow';
import { styles } from './styles';

interface InfoCardProps {
  account: AccountResponse;
  formatCurrency: (amount: number, currency: string) => string;
}

export const InfoCard: React.FC<InfoCardProps> = memo(({ account, formatCurrency }) => (
  <View style={styles.infoCard}>
    <InfoRow label="Type of account" value={account.accountType} />
    <InfoRow label="Account No" value={account.accountNumber} />
    <InfoRow
      label="Available Balance"
      value={formatCurrency(account.availableBalance, account.currency)}
      isBalance
    />
    <InfoRow label="Date added" value={account.dateAdded} />
  </View>
));
