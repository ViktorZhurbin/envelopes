import { IAccount } from "@/entities/accounts/types";

export interface AccountProps extends Pick<IAccount, "title" | "amount"> {
  groupIds: IAccount["subAccountGroupIds"];
}
