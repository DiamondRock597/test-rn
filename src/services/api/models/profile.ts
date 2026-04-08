export interface TransactionModel {
  name: string;
  bank: string;
  time: string;
  amount: number;
}

export interface AccountResponse {
  accountType: string;
  accountNumber: string;
  availableBalance: number;
  currency: string;
  dateAdded: string;
  transactions: TransactionModel[];
}
