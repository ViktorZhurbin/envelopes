import { Accounts } from "@/components/Accounts";
import { GroupTitle } from "@/components/GroupTitle";

export const Home = () => {
  return (
    <div>
      <GroupTitle
        title="Accounts"
        onClick={() => null}
        onClickIcon={() => null}
      />
      <Accounts />
    </div>
  );
};
