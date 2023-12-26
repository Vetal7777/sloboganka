import { useTranslation } from 'react-i18next'
import { article } from '../../data/content'
import styles from './article.module.css'

export function Article() {
  const { t } = useTranslation()
  const { title, description, preview_video_link } = article

  return (
    <>
      <div className={styles.background} id={'article'}>
        <div className={styles.container}>
          <h1 className={styles.title} children={t(title)} />
          <h2 className={styles.title} children={t(description)} />
          <iframe
            className={styles.youtube}
            src={preview_video_link}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </>
  )
}
