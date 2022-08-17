import styles from "./style.module.css";
import { GroupTitleProps } from "./types";

export const GroupTitle = ({
  title,
  onClick,
  onClickIcon,
}: GroupTitleProps) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <span>{title}</span>
      <span onClick={onClickIcon}>+</span>
    </div>
  );
};
