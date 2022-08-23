import { generatePath, useNavigate } from "react-router-dom";

import { Pages } from "@/routes";

import { Accordion } from "components/Accordion";
import { Envelope } from "components/Envelope";
import { PlusIcon } from "components/icons/PlusIcon";

import classes from "./style.module.css";
import { EnvelopeGroupComponentProps } from "./types";

export const EnvelopeGroupComponent = ({
  groupId,
  title,
  envelopes,
}: EnvelopeGroupComponentProps) => {
  const navigate = useNavigate();

  const gotToAddSubAccount = () => {
    const to = generatePath(Pages.AddSubAccount, {
      groupId: String(groupId),
    });

    navigate(to);
  };

  return (
    <Accordion summary={title} isOpen>
      {envelopes.map(({ id, title, amount }) => {
        const to = generatePath(Pages.SubAccount, {
          groupId: String(groupId),
          id: String(id),
        });

        const goToSubAccount = () => navigate(to);

        return (
          <Envelope
            key={id}
            title={title}
            amount={amount}
            onClick={goToSubAccount}
          />
        );
      })}
      <div className={classes.add} onClick={gotToAddSubAccount}>
        <PlusIcon /> Add
      </div>
    </Accordion>
  );
};
