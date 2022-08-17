import classes from "./style.module.css";
import { EnvelopeProps } from "./types";

export const Envelope = ({ title, amount }: EnvelopeProps) => (
  <div className={classes.root}>
    <span>{title}</span>
    <span>{amount}</span>
  </div>
);
