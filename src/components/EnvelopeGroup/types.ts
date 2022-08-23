import { ISubAccount, ISubAccountGroup } from "@/entities/accounts";

export interface EnvelopeGroupProps {
  id: ISubAccountGroup["id"];
  title: ISubAccountGroup["title"];
}

export interface EnvelopeGroupComponentProps
  extends Pick<EnvelopeGroupProps, "title"> {
  envelopes: ISubAccount[];
  groupId: ISubAccountGroup["id"];
}
