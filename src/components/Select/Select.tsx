import { SelectProps } from "./types";

export const Select = ({ name, options, required = false }: SelectProps) => {
  return (
    <select name={name} required={required}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
