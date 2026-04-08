import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface InfoRowProps {
  label: string;
  value: string;
  isBalance?: boolean;
}

export const InfoRow: React.FC<InfoRowProps> = ({ label, value, isBalance = false }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={isBalance ? styles.balanceValue : styles.infoValue}>{value}</Text>
  </View>
);
