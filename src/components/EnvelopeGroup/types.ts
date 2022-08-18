import { ISubAccountGroup } from "@/entities/accounts";

export interface EnvelopeProps {
  title: string;
  ids: ISubAccountGroup["subAccountIds"];
}
