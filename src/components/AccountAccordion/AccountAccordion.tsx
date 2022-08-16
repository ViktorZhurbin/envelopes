import { Accordion } from "@/components/Accordion";

import classes from "./AccountAccordion.module.css";
import { AccountAccordionProps } from "./types";

export const AccountAccordion = ({
  title,
  amount,
  children,
}: AccountAccordionProps) => {
  return (
    <Accordion
      summary={
        <div className={classes.summary}>
          <span>{title}</span>
          <span className={classes.amount}>{amount}</span>
        </div>
      }
    >
      {children}
    </Accordion>
  );
};
