import axios from "axios";

export const key = "35126969-91a6591af8599828cd024373b";
export const baseUrl = "https://pixabay.com/api/";
export const perPage = 12;

export async function getImages(query, page) {
  const response = await axios.get(
    `${baseUrl}?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );

  return response.data;
}

export function normalizedImages(imagesArray) {
  return imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
}
