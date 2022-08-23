import { AccountSummary } from "components/AccountSummary";
import { EnvelopeGroup } from "components/EnvelopeGroup";
import { GoBack } from "components/GoBack";
import { PlusIcon } from "components/icons/PlusIcon";

import classes from "./styles.module.css";
import { AccountProps } from "./types";

export const Account = ({ id, title, amount, groupIds }: AccountProps) => {
  return (
    <div className={classes.root}>
      <GoBack />
      <AccountSummary title={title} amount={amount} />
      <div>
        {groupIds.map((groupId) => (
          <EnvelopeGroup key={groupId} id={groupId} accountId={id} />
        ))}
        <div className={classes.addGroup}>
          <PlusIcon />
          Add group
        </div>
      </div>
    </div>
  );
};
