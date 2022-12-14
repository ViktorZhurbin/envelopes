import { PlusIcon } from "components/icons/PlusIcon";

import styles from "./style.module.css";
import { GroupTitleProps } from "./types";

export const GroupTitle = ({
  title,
  onClick,
  onClickIcon,
}: GroupTitleProps) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <span>
        <b>{title}</b>
      </span>
      <PlusIcon onClick={onClickIcon} />
    </div>
  );
};
