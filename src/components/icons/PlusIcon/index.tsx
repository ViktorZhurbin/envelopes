import classes from "./styles.module.css";
import { PlusIconProps } from "./types";

export const PlusIcon = ({ onClick }: PlusIconProps) => {
  return (
    <div className={classes.root} onClick={onClick}>
      +
    </div>
  );
};
