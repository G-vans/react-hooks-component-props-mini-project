import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);




function App() {
  return (
    <div className="App">
      <Header name="Mini Project"/>
      <About image={blogData.image} text="About this blog" />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;