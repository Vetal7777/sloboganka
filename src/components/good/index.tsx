import { useTranslation } from 'react-i18next'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { GoodProps } from '../../@types'
import styles from './good.module.css'

export function Good({
  item: { pic_length, id, content, title },
  index
}: GoodProps) {
  const { t } = useTranslation()
  const pics = new Array(pic_length)
    .fill('')
    .map((elem, picIndex) => `${id}-${picIndex + 1}.png`)

  const flexBasis = `${index < 2 ? 40 : 30}%`

  return (
    <>
      <div className={styles.container} style={{ flexBasis }}>
        <Carousel
          stopOnHover={false}
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
          showIndicators={false}
        >
          {pics.map((picture, pictureIndex) => (
            <img
              loading="lazy"
              key={pictureIndex}
              src={`./assets/images/${id}/${picture}`}
              className={styles.slide}
            />
          ))}
        </Carousel>
        <div className={styles.content}>
          <h3 className={styles.title} children={t(title)} />
          {content.map((advantage, contentIndex) => (
            <div
              key={contentIndex}
              className={styles.advantage}
              children={t(advantage)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
