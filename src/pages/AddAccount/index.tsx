import { useNavigate } from "react-router-dom";

import { CURRENCIES } from "@/constants/currencies";
import { IAccount } from "@/entities/accounts";
import { accounts } from "@/mockData";
import { Pages } from "@/routes";

import { Form } from "components/form/Form";
import { Input } from "components/form/Input";
import { Select } from "components/form/Select";

export const AddAccount = () => {
  const navigate = useNavigate();

  const handleCancel = () => navigate(-1);

  const handleSubmit = (values: Record<string, FormDataEntryValue>) => {
    console.log(values);

    accounts.push({
      ...values,
      id: accounts.length + 1,
      amount: Number(values.amount),
      subAccountGroupIds: [],
    } as unknown as IAccount);

    navigate(Pages.Accounts);
  };

  return (
    <Form onCancel={handleCancel} onSubmit={handleSubmit}>
      <Input name="title" placeholder="Название" required />
      <Select required name="currency" options={CURRENCIES} />
      <Input
        name="amount"
        type="number"
        placeholder="Текущий баланс"
        required
      />
    </Form>
  );
};
