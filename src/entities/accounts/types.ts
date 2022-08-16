export interface Account {
  id: number;
  // userId: number;

  title: string;
  currency: string;
  // all amounts are gonna be in 'cents'
  // to avoid imprecise calculation pitfalls
  // i.e. $24 will be 2400, 1RSD will be 100, etc.
  amount: number;
  // personal: boolean;
  // archived: boolean;

  envelopeIds: number[];
  // transactionIds: number[];
}

export interface IEnvelope extends Omit<Account, "envelopeIds"> {
  accountId: number;
}
