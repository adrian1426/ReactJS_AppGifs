const apiBase = process.env.REACT_APP_API_GIFS;
const apiKey = process.env.REACT_APP_API_KEY;

export const getGifs = async (keyWord = 'panda') => {
  const urlGifs = `${apiBase}/search?api_key=${apiKey}&q=${keyWord}&limit=10&offset=0&rating=G&lang=en`;

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