/**
 * /user/:id/accounts => IAccount[]
 * /user/:id/accounts/:id => IAccount

 * /user/:id/sub-account-groups => ISubAccountGroup[]
 * /user/:id/sub-account-groups/:id => ISubAccountGroup

 * /user/:id/sub-accounts => ISubAccount[]
 * /user/:id/sub-accounts/:id => ISubAccount
 */

export interface IAccount {
  id: number;
  userId: number;
  title: string;
  currency: string;
  subAccountGroupIds: ISubAccountGroup["id"][];
}

export interface ISubAccountGroup {
  id: number;
  userId: number;
  title: string;
  subAccountIds: ISubAccount["id"][];
  accountId: number;
}

export interface ISubAccount {
  id: number;
  userId: number;
  groupId: number | null;
  title: string;
  // all amounts are gonna be in 'cents'
  // to avoid imprecise calculation pitfalls
  // i.e. $24 will be 2400, 1RSD will be 100, etc.
  amount: number;
  // personal: boolean;
  // archived: boolean;
  // transactionIds: number[];
}
