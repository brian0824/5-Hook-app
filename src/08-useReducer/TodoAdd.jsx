import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const {
    formState: { description },
    onInputChange,
    onResetForm,
  } = useForm({
    description: "",
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };
    /* onNewTodo &&  */ onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        typeof="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary">
        Agregar
      </button>
    </form>
  );
};
