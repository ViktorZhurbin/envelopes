import { useNavigate, useParams } from "react-router-dom";

import { ISubAccount } from "@/entities/accounts";
import { subAccountGroups, subAccounts } from "@/mockData";

import { Form } from "components/form/Form";
import { Input } from "components/form/Input";

export const AddSubAccount = () => {
  const params = useParams();
  const navigate = useNavigate();

  const groupId = Number(params.groupId);
  const id = subAccounts.length + 1;

  const goBack = () => navigate(-1);

  const handleSubmit = (values: Record<string, FormDataEntryValue>) => {
    console.log(values);

    subAccounts.push({
      ...values,
      id,
      groupId,
      amount: Number(values.amount),
    } as unknown as ISubAccount);

    subAccountGroups.find(({ id }) => id === groupId)?.subAccountIds?.push(id);

    console.log(subAccountGroups, subAccounts);

    goBack();
  };

  return (
    <Form onCancel={goBack} onSubmit={handleSubmit}>
      <Input name="title" placeholder="Название" required />
      <Input
        name="amount"
        type="number"
        placeholder="Текущий баланс"
        required
      />
    </Form>
  );
};
