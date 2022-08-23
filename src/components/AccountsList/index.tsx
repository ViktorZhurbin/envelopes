import { useNavigate } from "react-router-dom";

import { accounts } from "@/mockData/accounts";
import { Pages } from "@/routes";

import classes from "./style.module.css";

export const AccountsList = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      {accounts.map(({ id, title, amount }) => {
        const goToAddAccount = () => navigate(`${Pages.Accounts}/${id}`);

        return (
          <div key={id} className={classes.account} onClick={goToAddAccount}>
            <span>{title}</span>
            <span>{amount}</span>
          </div>
        );
      })}
    </div>
  );
};
