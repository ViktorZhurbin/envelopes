import { IAccount } from "@/entities/accounts";

export type AccountProps = Pick<IAccount, "id" | "title" | "amount">;
