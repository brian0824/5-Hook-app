import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-exemples";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock("../../src/hooks");

describe("Pruebas en <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Breaking Bad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test("debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Fernando")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
