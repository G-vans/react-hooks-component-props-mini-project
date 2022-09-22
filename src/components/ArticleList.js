import React from "react";
import Article from "./Article.js";

const ArticleList = ({ posts }) => {
    const postList = posts.map((post) => {
      return (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      );
    });
  
    return <main>{postList}</main>;
  };
  
  export default ArticleList;