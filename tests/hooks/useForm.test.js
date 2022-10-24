import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Fernando",
    email: "fernando@googles.es",
  };
  test("debe regresar el obj por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test("debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = "Brian";
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toEqual(newName);
  });
  test("debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = "Brian";
    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
