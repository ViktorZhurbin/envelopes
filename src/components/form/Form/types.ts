export interface FormProps {
  children: React.ReactElement | React.ReactElement[];
  onCancel: () => void;
  onSubmit: (values: Record<string, FormDataEntryValue>) => void;
}
