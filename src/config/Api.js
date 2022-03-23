import * as axios from "axios";

const init = () => {
  const headers = { Accept: "application/json" };
  const client = axios.create({
    baseURL: "/api/1",
    timeout: 61000,
    headers: headers,
  });

  return client;
};

/* 
    getNews
    param to pass: lang ie. is short of language used
    datatype: string;
*/

export const getNews = (lang) => {
  return init().get("/news?apikey=" + process.env.REACT_APP_API_KEY, {
    params: { language: lang },
  });
};

/* 
    searchNews
    param to pass: search text
    datatype: string
*/

export const searchNews = (text) => {
  return init().get("/news?apikey=" + process.env.REACT_APP_API_KEY, {
    params: { q: encodeURIComponent(text) },
  });
};
