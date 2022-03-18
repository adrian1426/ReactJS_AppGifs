const apiBase = process.env.REACT_APP_API_GIFS;
const apiKey = process.env.REACT_APP_API_KEY;

export const getGifs = async ({ keyword = 'panda', page = 0, limit = 25, rating = 'g' }) => {
  const offset = limit * page;
  const urlGifs = `${apiBase}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en`;

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


export const getDetailGif = async (id) => {
  const urlGifs = `${apiBase}/gifs/${id}?api_key=${apiKey}`;

  try {
    const response = await fetch(urlGifs);
    const dataResponse = await response.json();

    const { data } = dataResponse;
    const { images, title, id } = data;
    const { url } = images.downsized_medium;

    return {
      id,
      title,
      url
    };

  } catch (error) {
    return {};
  }
};
