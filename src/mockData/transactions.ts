import { ITransaction } from "@/entities/transactions";

export const transactions: ITransaction[] = [
  {
    id: 1,
    date: new Date().toISOString(),
    amount: 100,
    accountId: 1,
    subAccountId: 3,
  },
  {
    id: 2,
    date: new Date().toISOString(),
    amount: 100,
    accountId: 1,
    subAccountId: 3,
  },
];
