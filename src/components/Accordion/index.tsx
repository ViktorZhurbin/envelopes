import cn from "classnames";
import { useEffect, useState } from "react";

import classes from "./style.module.css";
import { AccordionProps } from "./types";

export const Accordion = ({
  summary,
  children,
  isOpen = false,
  childrenClassName,
}: AccordionProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const toggleOpen = () => setOpen((open) => !open);

  return (
    <div className={classes.root}>
      <div className={classes.summary} onClick={toggleOpen}>
        <span className={classes.summaryText}>{summary}</span>
        <span className={cn(classes.summaryIcon, { [classes.open]: open })}>
          V
        </span>
      </div>
      {open && (
        <div className={cn(classes.children, childrenClassName)}>
          {children}
        </div>
      )}
    </div>
  );
};
