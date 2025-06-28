import styles from "./AboutBlurb.module.css";
import { useNavigate } from "react-router-dom";
import GrandOpening from "../../assets/grand-opening.jpg";
import Button from "../Button";

const AboutBlurb = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.blurb}>
      <div className={styles.blurbTextBlock}>
        <h4>
          YOUR ONE STOP SHOP FOR <br />
          ALL APPLIANCE NEEDS
        </h4>
        <p>
          We sell and service all major brands (Sub-Zero, GE, Maytag, Whirlpool,
          Kenmore, LG, Samsung and more) and provide the solution you need to
          give your past and current home appliances the reliability that you’ll
          remember for years to come.
        </p>
        <p>
          We offer exceptional personal service from our expert staff,
          guaranteeing that our recommendations will always be friendly, honest
          and reliable.
        </p>
        <Button title="More About Us" onClick={() => navigate("/about")} />
      </div>
      <img
        className={styles.goImage}
        src={GrandOpening}
        alt="Jennings grand opening"
      />
    </div>
  );
};

export default AboutBlurb;
