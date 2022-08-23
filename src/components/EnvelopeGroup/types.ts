import { IAccount, ISubAccount, ISubAccountGroup } from "@/entities/accounts";

export interface EnvelopeGroupProps {
  id: ISubAccountGroup["id"];
  accountId: IAccount["id"];
  title: ISubAccountGroup["title"];
}

export interface EnvelopeGroupComponentProps extends EnvelopeGroupProps {
  envelopes: ISubAccount[];
}
