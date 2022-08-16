import classes from "./FormActions.module.css";
import { FormActionsProps } from "./types";

export const FormActions = ({ onCancel }: FormActionsProps) => {
  return (
    <div className={classes.root}>
      <button className={classes.button} onClick={onCancel}>
        Отмена
      </button>
      <button type="submit" className={classes.button}>
        Сохранить
      </button>
    </div>
  );
};
