import { useState } from "react";
import { AddCategory, GifGrid } from "./componentes";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch Man"]);

  const onNuevaCategoria = (valor) => {
    if (categorias.includes(valor)) return;
    setCategorias([...categorias, valor]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNuevaCategoria={onNuevaCategoria} />
      {categorias.map((categoria) => (
        <GifGrid categoria={categoria} key={categoria} />
      ))}
    </>
  );
};
