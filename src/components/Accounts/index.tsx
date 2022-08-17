import { EnvelopeGroup } from "@/components/EnvelopeGroup";
import { accounts } from "@/mockData";

import { Accordion } from "../Accordion";
import classes from "./style.module.css";

export const Accounts = () => {
  return (
    <div>
      {accounts.map(({ id, title, subAccountGroupIds }) => (
        <Accordion
          key={id}
          summary={title}
          childrenClassName={classes.accountChildren}
        >
          {subAccountGroupIds.map((id) => (
            <EnvelopeGroup key={id} id={id} />
          ))}
        </Accordion>
      ))}
    </div>
  );
};
