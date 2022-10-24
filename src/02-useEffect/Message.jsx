import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      //const coords = { x, y };
      setCoords({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove);
    //console.log("Message Mounted");

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      //console.log("Message Unmounted");
    };
  }, []);

  return (
    <>
      <h1>Usuario Existente</h1>
      {JSON.stringify(coords)}
    </>
  );
};
