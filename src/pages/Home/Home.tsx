import { useNavigate } from "react-router-dom";

import { Accounts } from "@/components/Accounts";
import { GroupTitle } from "@/components/GroupTitle";
import { Pages } from "@/routes";

export const Home = () => {
  const navigate = useNavigate();

  const handleAddAccount = () => {
    navigate(Pages.AddAccount);
  };

  return (
    <div>
      <GroupTitle
        title="Accounts"
        onClick={() => null}
        onClickIcon={handleAddAccount}
      />
      <Accounts />
    </div>
  );
};
