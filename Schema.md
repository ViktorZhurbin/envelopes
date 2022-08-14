# Schema definitions

## User
```ts
interface User {
  id: number;
  email: string;
}
```
## Account
```ts
interface Account {
  id: number;
  userId: number;

  title: string;
  currency: string;
  // all amounts are gonna be in 'cents'
  // to avoid imprecise calculation pitfalls
  // i.e. $24 will be 2400, 1RSD will be 100, etc.
  amount: number;
  personal: boolean;
  archived: boolean;

  envelopeIds: number[];
  transactionIds: number[]
}

interface Envelope extends Account {
  accountId: number;
}
```

## Transaction
```ts
type TransactionType = "expense" | "income" | "transfer" | "debt"

interface TransactionBase {
  id: number;
  type: TransactionType;
  amount: number;
  envelopeId: number;
  date: string;
  comment?: string;
}

interface TransactionTransfer extends TransactionBase {
  type: "transfer";
  targetEnvelopeId: number;
  targetAmount: number;
}

type Transaction = TransactionBase | TransactionTransfer;
```

