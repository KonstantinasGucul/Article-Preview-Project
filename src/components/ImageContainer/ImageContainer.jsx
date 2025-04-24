import styles from './ImageContainer.module.css';

export default function ImageContainer() {
  return (
    <div className={styles.imageContainer}>
      <img src="/images/drawers.jpg" alt="drawers" />
    </div>
  );
}
