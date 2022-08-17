import classes from "./style.module.css";
import { AccountSummaryProps } from "./types";

export const AccountSummary = ({ title, amount }: AccountSummaryProps) => (
  <div className={classes.root}>
    <span className={classes.title}>{title}</span>
    <span className={classes.amount}>{amount}</span>
  </div>
);
