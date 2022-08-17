import { useParams } from "react-router-dom";

import { accounts } from "@/mockData";

import { Account as AccountComponent } from "./Account";

export const Account = () => {
  const { accountId } = useParams();

  if (!accountId) {
    return null;
  }

  const account = accounts.find(({ id }) => id === Number(accountId));

  if (!account) {
    return null;
  }

  const { title, amount, subAccountGroupIds } = account;

  return (
    <AccountComponent
      title={title}
      amount={amount}
      groupIds={subAccountGroupIds}
    />
  );
};
