import classes from "./style.module.css";
import { EnvelopeProps } from "./types";

export const Envelope = ({ title, amount, onClick }: EnvelopeProps) => (
  <div className={classes.root} onClick={onClick}>
    <span className={classes.title}>{title}</span>
    <span className={classes.amount}>{amount}</span>
  </div>
);
