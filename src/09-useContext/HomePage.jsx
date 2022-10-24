import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>
        HomePage<span>{user?.name}</span>
      </h1>
      <pre aria-label="info">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
