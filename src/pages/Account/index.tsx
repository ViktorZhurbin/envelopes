import { useParams } from "react-router-dom";

import { accounts } from "@/mockData/accounts";

import { AccountComponent } from "./component";

export const Account = () => {
  const { accountId } = useParams();

  if (!accountId) {
    return null;
  }

  const account = accounts.find(({ id }) => id === Number(accountId));

  if (!account) {
    return null;
  }

  const { id, title, amount } = account;

  return <AccountComponent id={id} title={title} amount={amount} />;
};
