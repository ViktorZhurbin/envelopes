import { IEnvelope } from "@/entities/accounts/types";
import { envelopes } from "@/mockData";

import { Envelope as EnvelopeComponent } from "./Envelope";

export const Envelope = ({ id }: { id: IEnvelope["id"] }) => {
  const envelope = envelopes.find((envelope) => envelope.id === id);

  if (!envelope) {
    return null;
  }

  const { title, amount } = envelope;

  return <EnvelopeComponent title={title} amount={amount} />;
};
