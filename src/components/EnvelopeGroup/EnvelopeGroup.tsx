import { useNavigate } from "react-router-dom";

import { Pages } from "@/routes";

import { Accordion } from "components/Accordion";
import { Envelope } from "components/Envelope";
import { PlusIcon } from "components/icons/PlusIcon";

import classes from "./style.module.css";
import { EnvelopeGroupComponentProps } from "./types";

export const EnvelopeGroup = ({
  id,
  title,
  accountId,
  subAccountIds,
}: EnvelopeGroupComponentProps) => {
  const navigate = useNavigate();

  const gotToAddSubAccount = () => {
    navigate(`${Pages.Accounts}/${accountId}/${id}/new`);
  };

  return (
    <Accordion summary={title} isOpen>
      {subAccountIds.map((subAccountId) => (
        <Envelope key={subAccountId} id={subAccountId} />
      ))}
      <div className={classes.add} onClick={gotToAddSubAccount}>
        <PlusIcon /> Add
      </div>
    </Accordion>
  );
};
