import { Navigate, Route, Routes } from "react-router-dom";

import { Pages } from "@/routes";

import { Account } from "pages/Account";
import { AccountForm } from "pages/AccountForm";
import { Accounts } from "pages/Accounts";

export const Navigation = () => {
  return (
    <Routes>
      <Route
        path={Pages.Home}
        element={<Navigate to={Pages.Accounts} replace />}
      />
      <Route path={Pages.Accounts} element={<Accounts />} />
      <Route path={`${Pages.Accounts}/:accountId`} element={<Account />} />
      <Route path={Pages.AddAccount} element={<AccountForm />} />
    </Routes>
  );
};