import ShareToolTip from '../ShereToolTip/ShareToolTip';
import styles from './ContentContainer.module.css';

export default function ContentContainer() {
  return (
    <div className={styles.contentContainer}>
      <h1>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <div className={styles.buttonAuthorContainer}>
        <div className={styles.profileContainer}>
          <img src="/images/avatar-michelle.jpg" alt="authur photo" />
          <div className={styles.profileText}>
            <span className={styles.name}>Michelle Appleton</span>
            <span className={styles.date}>28 Jun 2020</span>
          </div>
        </div>
        <div className={styles.shareWrapper}>
          <button className={styles.shareButton}>
            <img src="/images/icon-share.svg" alt="share button" />
          </button>
          <div className={styles.toolTipWrapper}>
            <ShareToolTip />
          </div>
        </div>
      </div>
    </div>
  );
}
