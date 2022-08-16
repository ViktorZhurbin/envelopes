import cn from "classnames";
import { useState } from "react";

import classes from "./Accordion.module.css";
import { AccordionProps } from "./Accordion.types";

export const Accordion = ({ summary, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((open) => !open);

  return (
    <div className={classes.root}>
      <div className={classes.summary} onClick={toggleOpen}>
        <span className={classes.summaryText}>{summary}</span>
        <span className={cn(classes.summaryIcon, { [classes.open]: open })}>
          V
        </span>
      </div>
      {open && <div className={classes.children}>{children}</div>}
    </div>
  );
};
