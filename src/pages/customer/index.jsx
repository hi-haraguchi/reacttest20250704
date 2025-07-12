import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import Sidebar from "../../layout/SideBar";
import CustomerList from "../../components/CustomerList";

const Customer = () => {
  return (
    <>
      <Header />
      <div className={styles.customer}>
        <Sidebar />
        <CustomerList />
      </div>
    </>
  );
};

export default Customer;