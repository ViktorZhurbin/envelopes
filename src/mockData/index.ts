import { Account, IEnvelope } from "@/entities/accounts/types";

const currency1 = "RSD";
const currency2 = "EUR";

export const envelopes: IEnvelope[] = [
  {
    id: 1,
    currency: currency1,
    accountId: 1,
    title: "Envelope1",
    amount: 10000,
  },
  {
    id: 2,
    currency: currency1,
    accountId: 1,
    title: "Envelope2",
    amount: -1000,
  },
  {
    id: 3,
    currency: currency1,
    accountId: 1,
    title: "Envelope3",
    amount: 10,
  },
  {
    id: 4,
    currency: currency2,
    accountId: 2,
    title: "Envelope1",
    amount: 50000,
  },
  {
    id: 5,
    currency: currency2,
    accountId: 2,
    title: "Envelope2",
    amount: -5000,
  },
  {
    id: 6,
    currency: currency2,
    accountId: 2,
    title: "Envelope3",
    amount: 50,
  },
];

const getAccountTotal = (id: number) =>
  envelopes.reduce((acc, { accountId, amount }) => {
    if (accountId === id) {
      acc += amount;
    }
    return acc;
  }, 0);

export const accounts: Account[] = [
  {
    id: 1,
    title: "Personal",
    currency: currency1,
    amount: getAccountTotal(1),
    envelopeIds: [1, 2, 3],
  },
  {
    id: 2,
    title: "Business",
    currency: currency2,
    amount: getAccountTotal(2),
    envelopeIds: [3, 4, 5],
  },
];
