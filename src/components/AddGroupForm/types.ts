import { ISubAccountGroup } from "@/entities/accounts";

export interface AddGroupFormProps {
  onCancel: () => void;
  onSubmit: (id: ISubAccountGroup["id"]) => void;
}
