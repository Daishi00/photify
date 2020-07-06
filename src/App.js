import React from "react";
import Header from "./components/Header/Header";
import style from "./app.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import ListComments from "./components/ListComments/ListComments";
const App = () => {
  return (
    <div className={style.container}>
      <Header />
      <SearchBar />
      <ListComments />
      <Footer />
    </div>
  );
};

export default App;
