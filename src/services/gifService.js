const apiBase = process.env.REACT_APP_API_GIFS;
const apiKey = process.env.REACT_APP_API_KEY;

export const getGifs = async (keyWord = 'panda') => {
  const urlGifs = `${apiBase}/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=50&offset=0&rating=G&lang=en`;

  try {
    const response = await fetch(urlGifs);
    const dataResponse = await response.json();

    const { data } = dataResponse;
    const urls = data.map(gif => {
      const { images, title, id } = gif;
      const { url } = images.downsized_medium;

      return {
        id,
        title,
        url
      };
    });

    return urls;
  } catch (error) {
    return [];
  }
};

export const getTrendingGif = async () => {
  const urlGifs = `${apiBase}/trending/searches?api_key=${apiKey}`;

  try {
    const response = await fetch(urlGifs);
    const dataResponse = await response.json();

    const { data } = dataResponse;
    return data;
  } catch (error) {
    return [];
  }
};
