import { useParams } from "react-router-dom";

import { ISubAccountGroup } from "@/entities/accounts";
import { accounts, subAccountGroups } from "@/mockData";

import { Form } from "components/form/Form";
import { Input } from "components/form/Input";

import { AddGroupFormProps } from "./types";

export const AddGroupForm = ({ onCancel, onSubmit }: AddGroupFormProps) => {
  const params = useParams();

  const handleSubmit = (values: Record<string, FormDataEntryValue>) => {
    const id = subAccountGroups.length + 1;

    subAccountGroups.push({
      ...values,
      id,
      accountId: Number(params.accountId),
      subAccountIds: [],
    } as unknown as ISubAccountGroup);

    onSubmit(id);

    console.log(accounts, subAccountGroups);
  };

  return (
    <Form onCancel={onCancel} onSubmit={handleSubmit}>
      <Input name="title" placeholder="Название группы" />
    </Form>
  );
};
