import PropTypes from "prop-types";
import GifItem from "./GifItem";
import useFetchGif from "../hooks/useFetchGif";

export const GifGrid = ({ categoria }) => {
  const { images, isLoading } = useFetchGif(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {isLoading && <h3>Cargando...</h3>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  categoria: PropTypes.string.isRequired,
};
