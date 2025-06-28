import styles from "./ImageBanner.module.css";
import { ServiceImages } from "../../schemas";

const ImageBanner = () => {
  return (
    <div className={styles.imageBanner}>
      {ServiceImages.map((image) => (
        <img className={styles.bannerImage} src={image} alt="service image" />
      ))}
    </div>
  );
};

export default ImageBanner;
