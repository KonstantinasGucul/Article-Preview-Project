import styles from './ShareToolTip.module.css';

export default function ShareToolTip() {
  return (
    <div className={styles.combinedToolContainer}>
      <div className={styles.toolContainer}>
        <div className={styles.iconContainer}>
          <span className={styles.shareIcon}>SHARE</span>
          <a href="#">
            <img src="/images/icon-facebook.svg" alt="facebook icon" />
          </a>
          <a href="#">
            <img src="/images/icon-twitter.svg" alt="twitter icon" />
          </a>
          <a href="#">
            <img src="/images/icon-pinterest.svg" alt="pinterest icon" />
          </a>
        </div>
      </div>
      <div className={styles.pointerContainer}></div>
    </div>
  );
}
