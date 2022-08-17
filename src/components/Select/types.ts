export interface SelectProps {
  name: string;
  required?: boolean;
  options: {
    value: string;
    label: string;
  }[];
}
