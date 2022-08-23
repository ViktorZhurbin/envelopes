import { subAccounts } from "@/mockData";

import { EnvelopeGroupComponent } from "./component";
import { EnvelopeGroupProps } from "./types";

export const EnvelopeGroup = ({ id, title, accountId }: EnvelopeGroupProps) => {
  const envelopes = subAccounts.filter(({ groupId }) => groupId === id);

  return (
    <EnvelopeGroupComponent
      id={id}
      title={title}
      accountId={accountId}
      envelopes={envelopes}
    />
  );
};
