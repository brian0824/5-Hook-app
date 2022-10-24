import { useEffect, useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "strider",
    email: "brian@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {
    //console.log("called!");
  }, []);
  useEffect(() => {
    //console.log("formState Change!");
  }, [formState]);
  useEffect(() => {
    //console.log("email Change!");
  }, [email]);
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="brian@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "strider2" && <Message />}
    </>
  );
};
