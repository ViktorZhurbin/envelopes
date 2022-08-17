import { FormActions } from "../FormActions";
import classes from "./style.module.css";
import { FormProps } from "./types";

export const Form = ({ children, onCancel, onSubmit }: FormProps) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    console.log(formData);

    const formValues: Record<string, FormDataEntryValue> = {};

    for (const [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    console.log(formValues);
    onSubmit(formValues);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.fields}>{children}</div>
      <FormActions onCancel={onCancel} />
    </form>
  );
};
