import { useState } from "react";

export const AddCategory = ({ onNuevaCategoria }) => {
  const [valor, setValor] = useState("");

  const onChange = ({ target }) => {
    setValor(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (valor.trim().length <= 1) return;
    onNuevaCategoria(valor);
    setValor("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={valor} placeholder="Buscar Gif" onChange={onChange} />
      </form>
    </>
  );
};
