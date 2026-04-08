import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type TransactionItemProps = {
  avatar: string;
  name: string;
  meta: string;
  amount: string;
  positive?: boolean;
};

export const TransactionItem = memo(
  ({ avatar, name, meta, amount, positive = false }: TransactionItemProps) => {
    return (
      <View style={styles.transactionItem}>
        <View style={styles.transactionAvatar}>
          <Text style={styles.transactionAvatarText}>{avatar}</Text>
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionName}>{name}</Text>
          <Text style={styles.transactionMeta}>{meta}</Text>
        </View>
        <Text
          style={positive ? styles.transactionAmountPositive : styles.transactionAmountNegative}>
          {amount}
        </Text>
      </View>
    );
  }
);
