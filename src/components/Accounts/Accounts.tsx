import { AccountAccordion } from "@/components/AccountAccordion";
import { Envelope } from "@/components/Envelope";
import { accounts } from "@/mockData";

export const Accounts = () => {
  return (
    <div>
      {accounts.map(({ id, title, amount, envelopeIds }) => (
        <AccountAccordion key={id} title={title} amount={amount}>
          {envelopeIds.map((id) => (
            <Envelope key={id} id={id} />
          ))}
        </AccountAccordion>
      ))}
    </div>
  );
};
