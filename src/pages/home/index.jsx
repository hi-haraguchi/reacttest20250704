import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import News from "../../components/News";
import CalendarItem from "../../components/CalendarItem";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <Sidebar />
        <div className={styles.contents}>
          <News />
          <CalendarItem />
        </div>
      </div>
    </>
  );
};

export default Home;