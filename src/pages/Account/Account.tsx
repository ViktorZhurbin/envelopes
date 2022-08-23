import { useState } from "react";

import { ISubAccountGroup } from "@/entities/accounts";
import { accounts } from "@/mockData";

import { AccountSummary } from "components/AccountSummary";
import { AddGroupForm } from "components/AddGroupForm";
import { EnvelopeGroup } from "components/EnvelopeGroup";
import { GoBack } from "components/GoBack";
import { PlusIcon } from "components/icons/PlusIcon";

import classes from "./styles.module.css";
import { AccountProps } from "./types";

export const Account = ({ id, title, amount, groupIds }: AccountProps) => {
  const [isAddingGroup, setAddingGroup] = useState(false);

  const handleStartAddGroup = () => setAddingGroup(true);
  const handleStopAddGroup = () => setAddingGroup(false);

  const handleSubmit = (groupId: ISubAccountGroup["id"]) => {
    handleStopAddGroup();

    accounts
      .find((account) => account.id === id)
      ?.subAccountGroupIds?.push(groupId);
  };

  return (
    <div className={classes.root}>
      <GoBack />
      <AccountSummary title={title} amount={amount} />
      <div>
        {groupIds.map((groupId) => (
          <EnvelopeGroup key={groupId} id={groupId} accountId={id} />
        ))}
        {isAddingGroup ? (
          <div>
            <AddGroupForm
              onCancel={handleStopAddGroup}
              onSubmit={handleSubmit}
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
