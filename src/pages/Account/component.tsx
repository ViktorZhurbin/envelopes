import { useState } from "react";

import { subAccountGroups } from "@/mockData/accounts";

import { AccountSummary } from "components/AccountSummary";
import { AddGroupForm } from "components/AddGroupForm";
import { EnvelopeGroup } from "components/EnvelopeGroup";
import { GoBack } from "components/GoBack";
import { PlusIcon } from "components/icons/PlusIcon";

import classes from "./styles.module.css";
import { AccountProps } from "./types";

export const AccountComponent = ({ id, title, amount }: AccountProps) => {
  const [isAddingGroup, setAddingGroup] = useState(false);

  const envelopeGroups = subAccountGroups.filter(
    ({ accountId }) => accountId === id
  );

  const handleStartAddGroup = () => setAddingGroup(true);
  const handleStopAddGroup = () => setAddingGroup(false);

  return (
    <div className={classes.root}>
      <GoBack />
      <AccountSummary title={title} amount={amount} />
      <div>
        {envelopeGroups.map(({ id, title }) => (
          <EnvelopeGroup key={id} id={id} title={title} accountId={id} />
        ))}
        {isAddingGroup ? (
          <div>
            <AddGroupForm
              onCancel={handleStopAddGroup}
              onSubmit={handleStopAddGroup}
            />
          </div>
        ) : (
          <div className={classes.addGroup} onClick={handleStartAddGroup}>
            <PlusIcon />
            Add group
          </div>
        )}
      </div>
    </div>
  );
};
