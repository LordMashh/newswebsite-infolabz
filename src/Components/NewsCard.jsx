import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function NewsCard({ apiUrl }) {
  const [articles, setArticles] = useState([]);
  const [readmoreIndex, setReadmoreIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  return (
    <div className="NewsCardsContainer">
      {loading && <Loader />} {/* Show Loader while loading */}
      {!loading &&
        articles.map((article, index) =>
          loading ? (
            <Loader />
          ) : (
            <div key={index} className="NewsCard">
              <img
                className="cityImage"
                src={article.imageUrl}
                alt="cityImage"
              />
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
                      if (index === readmoreIndex) {
                        setReadmoreIndex(-1); // Close the open NewsCard
                      } else {
                        setReadmoreIndex(index); // Open the clicked NewsCard
                      }
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
          )
        )}
    </div>
  );
}

export default NewsCard;
