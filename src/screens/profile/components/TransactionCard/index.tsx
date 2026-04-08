import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { TransactionItem } from './TransactionItem';
import { styles } from './styles';

interface TransactionCardProps {
  transactionItems: {
    avatar: string;
    name: string;
    meta: string;
    amount: string;
    positive: boolean;
  }[];
}

export const TransactionCard: React.FC<TransactionCardProps> = memo(({ transactionItems }) => (
  <View style={styles.transactionCard}>
    <View style={styles.transactionHeaderRow}>
      <Text style={styles.transactionTitle}>Recent Transactions</Text>
      <Text style={styles.transactionChevron}>›</Text>
    </View>

    {transactionItems.map(item => (
      <TransactionItem
        key={`${item.avatar}-${item.name}`}
        avatar={item.avatar}
        name={item.name}
        meta={item.meta}
        amount={item.amount}
        positive={item.positive}
      />
    ))}
  </View>
));
