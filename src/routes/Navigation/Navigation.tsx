import { Route, Routes } from "react-router-dom";

import { AccountForm } from "@/pages/AccountForm";
import { Home } from "@/pages/Home";
import { Pages } from "@/routes";

export const Navigation = () => {
  return (
    <Routes>
      <Route path={Pages.Home} element={<Home />} />
      <Route path={Pages.AddAccount} element={<AccountForm />} />
    </Routes>
  );
};
