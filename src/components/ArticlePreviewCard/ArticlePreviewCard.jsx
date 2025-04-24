import styles from './ArticlePreviewCard.module.css';
import ContentContainer from '../ContentContainer/ContentContainer';
import ImageContainer from '../ImageContainer/ImageContainer';

export default function ArticlePreviewCard() {
  return (
    <div className={styles.articlePreviewCard}>
      <ImageContainer />
      <ContentContainer />
    </div>
  );
}
