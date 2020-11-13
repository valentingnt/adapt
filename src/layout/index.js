import React from "react";
import Navbar from "../components/Navbar";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <div className={styles.blurBackground}>
        <div>{props.children}</div>
      </div>
      <Navbar />
    </div>
  );
};

export default Layout;
