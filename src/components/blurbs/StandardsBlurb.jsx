import styles from "./StandardsBlurb.module.css";
import Button from "../Button";

const StandardsBlurb = () => {
  return (
    <div className={styles.standards}>
      <div className={styles.standardsItem}>
        <h4>Trusted & Reliable</h4>
        <p>
          Any machine purchased at Matt’s is backed by our 30 day warranty and
          100% Satisfaction Guarantee.
        </p>
        {/* <Button title="Learn More" secondary /> */}
      </div>
      <div className={styles.standardsItem}>
        <h4>Experienced Team</h4>
        <p>
          All of our technicians are EPA certified with over 88 years of
          combined experience.
        </p>
        {/* <Button title="Learn More" secondary /> */}
      </div>
      <div className={styles.standardsItem}>
        <h4>Trade Your Appliances</h4>
        <p>
          Whether used or broken, we buy/sell/trade refrigerators, freezers,
          stove tops, washers & dryers.
        </p>
        <Button title="Learn More" secondary />
      </div>
      <div className={styles.standardsItem}>
        <h4>Leasing Available</h4>
        <p>
          We now offer $50 Take Home with our No Credit Need leasing option!
          Contact us today!
        </p>
        <Button title="Learn More" secondary />
      </div>
    </div>
  );
};

export default StandardsBlurb;
