import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";
describe("Pruebas en <Loginpage/>", () => {
  const setUserMock = jest.fn();

  test("debe de mostrar el componente sin el usuario ", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const pre = screen.getByLabelText("pre");
    expect(pre.innerHTML).toBe("null");
    //screen.debug();
  });
  test("debe de llamar el setUser cuando se hace click en el boton ", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const btn = screen.getByLabelText("log");
    fireEvent.click(btn);
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "juan",
      year: 1990,
    });
  });
});
