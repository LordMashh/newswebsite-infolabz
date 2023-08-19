import React, { useState, useEffect, useCallback } from "react";
import Loader from "./Loader";

function NewsCard({ apiUrl }) {
  const [articles, setArticles] = useState([]);
  const [readmoreIndex, setReadmoreIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data && data.data.articles) {
        setArticles(data.data.articles);
      }
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="NewsCardsContainer">
      {loading && <Loader />}
      {!loading &&
        articles.map((article, index) => (
          <div key={index} className="NewsCard">
            <img className="cityImage" src={article.imageUrl} alt="cityImage" />
            <div className="NewsCardInfo">
              <div className="NewsCardDetails">
                <h4 className="NewsCardTitle">{article.title}</h4>
                <h4 className="Source">SOURCE : {article.sourceName}</h4>
              </div>
              <div className="description">
                {index === readmoreIndex
                  ? article.content
                  : `${article.content.substring(0, 100)}....`}
                <span
                  className="readMore"
                  onClick={() => {
                    setReadmoreIndex((prevIndex) =>
                      prevIndex === index ? -1 : index
                    );
                  }}
                >
                  {index === readmoreIndex ? "Show Less" : "Read More"}
                </span>
              </div>
            </div>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="fullArticles">Read Full Article</button>
            </a>
          </div>
        ))}
    </div>
  );
}

export default NewsCard;
