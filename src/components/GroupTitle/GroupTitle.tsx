import styles from "./GroupTitle.module.css";
import { GroupTitleProps } from "./GroupTitle.types";

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
