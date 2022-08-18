import { ISubAccountGroup } from "@/entities/accounts";
import { subAccountGroups } from "@/mockData";

import { EnvelopeGroup as EnvelopeGroupComponent } from "./EnvelopeGroup";

export const EnvelopeGroup = ({ id }: { id: ISubAccountGroup["id"] }) => {
  const envelopeGroup = subAccountGroups.find((envelope) => envelope.id === id);

  if (!envelopeGroup) {
    return null;
  }

  const { title, subAccountIds } = envelopeGroup;

  return <EnvelopeGroupComponent title={title} ids={subAccountIds} />;
};
