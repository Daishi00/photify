import React from "react";
import Header from "./components/Header/Header";
import style from "./app.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className={style.container}>
      <Header />
      <SearchBar />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
