import { Outlet, useNavigate } from "react-router-dom";

import { AccountsList } from "@/components/AccountsList";
import { GroupTitle } from "@/components/GroupTitle";
import { Pages } from "@/routes";

import classes from "./style.module.css";

export const Accounts = () => {
  const navigate = useNavigate();

  const handleAddAccount = () => {
    navigate(Pages.AddAccount);
  };

  return (
    <div className={classes.root}>
      <GroupTitle
        title="Карты и счета"
        onClick={() => null}
        onClickIcon={handleAddAccount}
      />
      <AccountsList />
      <Outlet />
    </div>
  );
};
