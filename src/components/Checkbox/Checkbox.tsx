import classes from "./Checkbox.module.css";
import { CheckboxProps } from "./types";

export const Checkbox = ({ label, name, onChange }: CheckboxProps) => {
  return (
    <label className={classes.root}>
      {label}
      <input name={name} type="checkbox" onChange={onChange} />
    </label>
  );
};
