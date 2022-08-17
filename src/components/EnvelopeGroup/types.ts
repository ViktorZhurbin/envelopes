import { ISubAccountGroup } from "@/entities/accounts/types";

export interface EnvelopeProps {
  title: string;
  ids: ISubAccountGroup["subAccountIds"];
}
