import { AccountSummary } from "components/AccountSummary";
import { EnvelopeGroup } from "components/EnvelopeGroup";
import { GoBack } from "components/GoBack";

import classes from "./styles.module.css";
import { AccountProps } from "./types";

export const Account = ({ title, amount, groupIds }: AccountProps) => {
  return (
    <div className={classes.root}>
      <GoBack />
      <AccountSummary title={title} amount={amount} />
      <div>
        {groupIds.map((id) => (
          <EnvelopeGroup key={id} id={id} />
        ))}
      </div>
    </div>
  );
};
