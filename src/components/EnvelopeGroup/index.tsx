import { subAccountGroups } from "@/mockData";

import { EnvelopeGroup as EnvelopeGroupComponent } from "./EnvelopeGroup";
import { EnvelopeGroupProps } from "./types";

export const EnvelopeGroup = ({ id, accountId }: EnvelopeGroupProps) => {
  const envelopeGroup = subAccountGroups.find((group) => group.id === id);

  if (!envelopeGroup) {
    return null;
  }

  const { title, subAccountIds } = envelopeGroup;

  return (
    <EnvelopeGroupComponent
      id={id}
      title={title}
      accountId={accountId}
      subAccountIds={subAccountIds}
    />
  );
};
