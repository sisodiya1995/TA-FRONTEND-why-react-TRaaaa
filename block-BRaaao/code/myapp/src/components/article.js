import React from "react";
import articleData from "../data";

function Articles() {
  return (
    <>
      {articleData.map((article) => {
        return (
          
            <div className="article">
              <Article key={article.id} {...article} />
            </div>
         
        );
      })}
    </>
  );
}

function Article(props) {
  return (
    <>
      <img src={props.urlToImage} alt="img" />
      <p>{props.title}</p>
    </>
  );
}

export default Articles;
