import React from "react";
import articleData from "../data";
import propTypes from 'prop-types';

function Articles() {
  return (
    <>
      {articleData.map((article) => {
        return (
          
            <div className="article" key={article.id}>
              <Article  {...article} />
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

Article.propTypes = {
  title: propTypes.string.isRequired,
  urlToImage:propTypes.string.isRequired
};
export default Articles;
