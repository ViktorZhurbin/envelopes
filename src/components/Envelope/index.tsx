import classes from "./style.module.css";
import { EnvelopeProps } from "./types";

export const Envelope = ({ title, amount }: EnvelopeProps) => (
  <div className={classes.root}>
    <span className={classes.title}>{title}</span>
    <span className={classes.amount}>{amount}</span>
  </div>
);
