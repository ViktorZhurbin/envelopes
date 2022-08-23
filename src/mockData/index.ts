import { IAccount, ISubAccount, ISubAccountGroup } from "@/entities/accounts";

const currency1 = "RSD";
const currency2 = "EUR";

export const accounts: IAccount[] = [
  {
    id: 1,
    userId: 1,
    title: "Личная карта",
    amount: 5000000,
    currency: currency1,
    subAccountGroupIds: [1, 3, 4],
    private: false,
    archived: false,
  },
  {
    id: 2,
    userId: 1,
    title: "Бизнес карта",
    amount: 1000000,
    currency: currency2,
    subAccountGroupIds: [2],
    private: false,
    archived: false,
  },
];

export const subAccountGroups: ISubAccountGroup[] = [
  {
    id: 1,
    title: "Прочее",
    subAccountIds: [5],
    userId: 1,
    accountId: 1,
  },
  {
    id: 2,
    title: "Прочее",
    subAccountIds: [6],
    userId: 1,
    accountId: 2,
  },
  {
    id: 3,
    title: "Наташины",
    subAccountIds: [1],
    userId: 1,
    accountId: 1,
  },
  {
    id: 4,
    title: "Продукты",
    subAccountIds: [1],
    userId: 1,
    accountId: 1,
  },
];

export const subAccounts: ISubAccount[] = [
  {
    groupId: 3,
    title: "Карта",
    amount: 3000000,
    id: 1,
    userId: 1,
  },
  {
    groupId: 3,
    title: "Наличные",
    amount: 300000,
    id: 2,
    userId: 1,
  },
  {
    groupId: 2,
    title: "На себя",
    amount: 10,
    id: 3,
    userId: 1,
  },
  {
    groupId: 2,
    title: "На подарки",
    amount: 50000,
    id: 4,
    userId: 1,
  },
  {
    groupId: 1,
    title: "Медицина",
    amount: 38000,
    id: 5,
    userId: 1,
  },
  {
    groupId: 1,
    title: "Витины",
    amount: 8000,
    id: 6,
    userId: 1,
  },
];
