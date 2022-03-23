import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Newstile from "../../components/newsTile/NewsTile";
import "./Landing.css";
import { getNews, searchNews } from "../../config/Api";

const Landing = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews("en")
      .then((response) => {
        setNewsList(response.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const getSearchedNews = (text) => {
    setLoading(true);
    searchNews(text)
      .then((response) => {
        setNewsList(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main">
      <div className="container">
      <SearchBar
        placeholderText="Search here..."
        getSearchedNews={getSearchedNews}
      />
      {loading ? (
        <div className="main">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          {newsList.length > 0 ? (
            newsList.map((news) => {
              return (
                <Newstile
                  source={news.source_id}
                  title={news.title}
                  description={news.description}
                  category={news.category}
                  image_url={news.image_url}
                />
              );
            })
          ) : (
            <h1>No News found. Please change the search text</h1>
          )}
        </>
      )}
      </div>
    </div>
  );
};

export default Landing;
