import { useNavigate } from "react-router-dom";

import { CURRENCIES } from "@/constants/currencies";
import { IAccount } from "@/entities/accounts";
import { accounts } from "@/mockData";
import { Pages } from "@/routes";

import { Checkbox } from "components/form/Checkbox";
import { Form } from "components/form/Form";
import { Input } from "components/form/Input";
import { Select } from "components/form/Select";

export const AccountForm = () => {
  const navigate = useNavigate();

  const handleCancel = () => navigate(Pages.Accounts);

  const handleSubmit = (values: Record<string, FormDataEntryValue>) => {
    console.log(values);

    accounts.push({
      ...values,
      id: accounts.length + 1,
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
      <Checkbox label="Личный счёт" name="private" />
      <Checkbox label="Архивный счёт" name="archived" />
    </Form>
  );
};
