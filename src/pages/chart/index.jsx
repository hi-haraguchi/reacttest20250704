import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import ChartBar from "../../components/Chart";

const Chart = () => {
  return (
    <>
      <Header />
      <div className={styles.chart}>
        <Sidebar />
        <ChartBar />
      </div>
    </>
  );
};

export default Chart;