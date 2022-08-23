import { Navigate, Route, Routes } from "react-router-dom";

import { AddAccount } from "@/pages/AddAccount";
import { AddSubAccount } from "@/pages/AddSubAccount";
import { SubAccount } from "@/pages/SubAccount";
import { Pages } from "@/routes";

import { Account } from "pages/Account";
import { Accounts } from "pages/Accounts";

export const Navigation = () => {
  return (
    <Routes>
      <Route
        path={Pages.Home}
        element={<Navigate to={Pages.Accounts} replace />}
      />
      <Route path={Pages.Accounts} element={<Accounts />} />
      <Route path={Pages.Account} element={<Account />} />
      <Route path={Pages.AddAccount} element={<AddAccount />} />
      <Route path={Pages.SubAccount} element={<SubAccount />} />
      <Route path={Pages.AddSubAccount} element={<AddSubAccount />} />
    </Routes>
  );
};
