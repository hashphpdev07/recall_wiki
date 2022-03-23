import React from "react";
import "./NewsTile.css";

const Newstile = ({
  source: source,
  title: title,
  description: description,
  category: category,
  image_url: image_url,
}) => {
  return (
    <div className="news">
      <div>
        <p className="source">{source}</p>
        <h5 className="title">{title}</h5>
        <p className="news-content">{description}</p>
        <p className="category">
          Category: {category ? category[0] : "Unknown"}
        </p>
      </div>
      {image_url && (
        <div className="image-block">
          <img src={image_url} className="news-image" />
        </div>
      )}
    </div>
  );
};

export default Newstile;
