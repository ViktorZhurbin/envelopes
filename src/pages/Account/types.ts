import { IAccount } from "@/entities/accounts";

export interface AccountProps
  extends Pick<IAccount, "id" | "title" | "amount"> {
  groupIds: IAccount["subAccountGroupIds"];
}
