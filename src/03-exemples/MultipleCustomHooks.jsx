import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "./";
export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { hasError, data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  //console.log({ data, hasError, isLoading });
  /* if (isLoading) {
    return <h1>Cargando...</h1>;
  } */

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={increment}
      >
        Next Quote
      </button>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={decrement}
      >
        Prev Quote
      </button>
    </>
  );
};
