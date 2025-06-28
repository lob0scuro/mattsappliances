import styles from "./BrandsList.module.css";
import React from "react";
import { BrandImages } from "../schemas";

const BrandsList = () => {
  return (
    <>
      <h3 className={styles.brandsHeader}>
        WE CARRY ALL MAJOR APPLIANCE BRANDS.
      </h3>
      <div className={styles.brandContainer}>
        {BrandImages.map((image) => (
          <img className={styles.brandImage} src={image} alt="brand-logo" />
        ))}
      </div>
    </>
  );
};

export default BrandsList;
