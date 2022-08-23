import { useParams } from "react-router-dom";

import { subAccounts } from "@/mockData/accounts";
import { transactions as data } from "@/mockData/transactions";

import { SubAccountComponent } from "./component";

export const SubAccount = () => {
  const params = useParams();

  const id = Number(params.id);
  const subAccount = subAccounts.find((acc) => acc.id === id);

  if (!subAccount) {
    return null;
  }

  const { title, amount } = subAccount;
  const transactions = data.filter(({ subAccountId }) => subAccountId === id);

  return (
    <SubAccountComponent
      title={title}
      amount={amount}
      transactions={transactions}
    />
  );
};
