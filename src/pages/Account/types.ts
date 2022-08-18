import { IAccount } from "@/entities/accounts";

export interface AccountProps extends Pick<IAccount, "title" | "amount"> {
  groupIds: IAccount["subAccountGroupIds"];
}
