import { AccountSummary } from "@/components/AccountSummary";
import { GoBack } from "@/components/GoBack";
import { transactions } from "@/mockData/transactions";

import classes from "./styles.module.css";
import { SubAccountProps } from "./types";

export const SubAccountComponent = ({ title, amount }: SubAccountProps) => {
  return (
    <div className={classes.root}>
      <GoBack />
      <AccountSummary title={title} amount={amount} />
      {transactions.map(({ id, amount }) => (
        <div key={id}>{amount}</div>
      ))}
    </div>
  );
};
