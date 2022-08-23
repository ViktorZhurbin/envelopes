import { IAccount, ISubAccountGroup } from "@/entities/accounts";

export interface EnvelopeGroupProps {
  id: ISubAccountGroup["id"];
  accountId: IAccount["id"];
}

export interface EnvelopeGroupComponentProps
  extends Pick<EnvelopeGroupProps, "accountId"> {
  id: ISubAccountGroup["id"];
  title: ISubAccountGroup["title"];
  subAccountIds: ISubAccountGroup["subAccountIds"];
}
