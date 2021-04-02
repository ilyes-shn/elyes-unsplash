import axios from 'axios'

export const global = (page) => {
    const res = axios
    .get(
      `https://api.unsplash.com/photos/?per_page=24&page=${page}&client_id=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
    return res
}

export const search = (page,query) => {
  const res = axios
  .get(
    `https://api.unsplash.com/search/photos/?query=${query}&per_page=24&page=${page}&client_id=${process.env.REACT_APP_API_KEY}`
  )
  .then((res) => res.data)
  .catch((err) => console.log(err));
  return res
}