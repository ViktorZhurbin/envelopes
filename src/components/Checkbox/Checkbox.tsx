import { useEffect, useState } from "react";

import classes from "./Checkbox.module.css";
import { CheckboxProps } from "./types";

export const Checkbox = ({
  label,
  name,
  isChecked = false,
  onChange,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleChange = () => {
    setChecked((checked) => !checked);
    onChange?.();
  };

  return (
    <label className={classes.root}>
      {label}
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </label>
  );
};
