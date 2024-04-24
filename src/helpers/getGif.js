export const getGif = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=CZmDDeCbWCbgTys59dPQLuihMhXAUe3P&q=${categoria}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gif = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gif;
};
