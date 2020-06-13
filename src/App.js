import React from "react";
import Header from "./components/Header";
import style from "./app.module.scss";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    <div className={style.container}>
      <Header />
      <SearchBar />
      <Gallery />
    </div>
  );
};

export default App;
