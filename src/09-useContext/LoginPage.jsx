import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div>LoginPage</div>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        aria-label="log"
        className="btn btn-primary"
        onClick={() => setUser({ id: 123, name: "juan", year: 1990 })}
      >
        Establecer Usuario
      </button>
    </>
  );
};
