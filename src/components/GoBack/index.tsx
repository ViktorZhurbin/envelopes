import { useNavigate } from "react-router-dom";

import classes from "./style.module.css";

export const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <div className={classes.root} onClick={handleGoBack}>
      <span className={classes.arrow}>←</span>
    </div>
  );
};
