import styles from "./Landing.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import AboutBlurb from "../components/blurbs/AboutBlurb";
import StandardsBlurb from "../components/blurbs/StandardsBlurb";
import BrandsList from "../components/BrandsList";
import ImageBanner from "../components/banners/ImageBanner";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.heroSection}>
        <h2 className={styles.mainHeader}>
          Serving Southwest Louisiana since 2014
        </h2>
        <h4 className={styles.subHeader}>
          We specialize in new and used appliances
        </h4>
      </section>
      <StandardsBlurb />
      <AboutBlurb />
      <ImageBanner />
      <BrandsList />
    </>
  );
};

export default Landing;
