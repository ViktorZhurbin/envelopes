import { ISubAccount } from "@/entities/accounts";
import { ITransaction } from "@/entities/transactions";

export interface SubAccountProps {
  title: ISubAccount["title"];
  amount: ISubAccount["amount"];
  transactions: ITransaction[];
}
