import styles from "./LakeCharlesHome.module.css";
import React from "react";
import GrandOpening from "../../assets/grand-opening.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const LakeCharlesHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <h4 className={styles.lcHomeAboutBlurbHeader}>
        We specialize in new and used appliances
      </h4>
      <div className={styles.blurb}>
        <div className={styles.lcAboutBlurb}>
          <p>
            We sell and service all major brands (Sub-Zero, GE, Maytag,
            Whirlpool, Kenmore, LG, Samsung and more) and provide the solution
            you need to give your past and current home appliances the
            reliability that you’ll remember for years to come.
          </p>
          <p>
            We offer exceptional personal service from our expert staff,
            guaranteeing that our recommendations will always be friendly,
            honest and reliable.
          </p>
          <Button title="Learn More" onClick={() => navigate("/about")} />
        </div>
        <img
          className={styles.goImage}
          src={GrandOpening}
          alt="Jennings grand opening"
        />
      </div>
    </>
  );
};

export default LakeCharlesHome;
