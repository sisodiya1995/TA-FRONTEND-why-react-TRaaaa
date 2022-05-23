import React from "react";
import Header from "./header";
import Articles from "./article";
import Footer from "./footer";

function App() {
  return (
    <>
      <Header />
      <article className="articles">
        <Articles />
      </article>

      <Footer />
    </>
  );
}
export default App;
