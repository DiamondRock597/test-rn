import { useCallback, useEffect, useMemo, useState } from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '@/navigation/types';
import { ProfileApi } from '@/services/api/domains/profile';
import { AccountResponse, TransactionModel } from '@/services/api/models/profile';

export const useProfile = () => {
  const [account, setAccount] = useState<AccountResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const { params } = useRoute<RouteProp<RootStackParamList, 'Profile'>>();

  useEffect(() => {
    ProfileApi.getProfile(params.basicAuthCredentials)
      .then(res => {
        setAccount(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [params.basicAuthCredentials]);

  const formatCurrency = useCallback((amount: number, currency: string) => {
    if (currency === 'NGN') {
      return `N${amount.toLocaleString()}`;
    }
    return `${currency}${amount.toLocaleString()}`;
  }, []);

  const getInitials = useCallback((accountType: string) => {
    return accountType.charAt(0).toUpperCase();
  }, []);

  const transactionItems = useMemo(
    () =>
      account?.transactions.map((transaction: TransactionModel) => ({
        avatar: transaction.name.charAt(0).toUpperCase(),
        name: transaction.name,
        meta: `${transaction.bank} ${transaction.time}`,
        amount: `${transaction.amount > 0 ? '+' : ''}${formatCurrency(Math.abs(transaction.amount), account.currency)}`,
        positive: transaction.amount > 0
      })) ?? [],
    [account, formatCurrency]
  );

  return { account, loading, formatCurrency, getInitials, transactionItems };
};
