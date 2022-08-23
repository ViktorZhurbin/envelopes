import { subAccounts } from "@/mockData/accounts";

import { EnvelopeGroupComponent } from "./component";
import { EnvelopeGroupProps } from "./types";

export const EnvelopeGroup = ({ id, title }: EnvelopeGroupProps) => {
  const envelopes = subAccounts.filter(({ groupId }) => groupId === id);

  return (
    <EnvelopeGroupComponent groupId={id} title={title} envelopes={envelopes} />
  );
};
