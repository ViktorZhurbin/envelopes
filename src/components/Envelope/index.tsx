import { ISubAccount } from "@/entities/accounts";
import { subAccounts } from "@/mockData";

import { Envelope as EnvelopeComponent } from "./Envelope";

export const Envelope = ({ id }: { id: ISubAccount["id"] }) => {
  const envelope = subAccounts.find((envelope) => envelope.id === id);

  if (!envelope) {
    return null;
  }

  const { title, amount } = envelope;

  return <EnvelopeComponent title={title} amount={amount} />;
};
