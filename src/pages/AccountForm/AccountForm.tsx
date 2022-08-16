import { useNavigate } from "react-router-dom";

import { Checkbox } from "@/components/Checkbox";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { CURRENCIES } from "@/constants/currencies";
import { Pages } from "@/routes";

export const AccountForm = () => {
  const navigate = useNavigate();

  const handleCancel = () => navigate(Pages.Home);

  const handleSubmit = (values: Record<string, FormDataEntryValue>) => {
    console.log(values);
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
