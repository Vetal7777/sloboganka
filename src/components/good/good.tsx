import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { GoodI } from '../../model/state'
import styles from './good.module.css'

export default function Good({ item, index }: { item: GoodI; index: number }) {
  const pics = new Array(item.pic_length)
    .fill('')
    .map((elem, index) => `${item.id}-${index + 1}.png`)
  return (
    <>
      <div
        className={styles.container}
        style={{ flexBasis: `${index < 2 ? 40 : 30}%` }}
      >
        <Carousel
          stopOnHover={false}
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
          showIndicators={false}
        >
          {pics.map((picture, index) => (
            <img
              loading="lazy"
              key={index}
              src={`./assets/images/${item.id}/${picture}`}
              className={styles.slide}
            />
          ))}
        </Carousel>
        <div className={styles.content}>
          <h3 className={styles.title} children={item.title} />
          {item.content.map((advantage, index) => (
            <div
              key={index}
              className={styles.advantage}
              children={advantage}
            />
          ))}
        </div>
      </div>
    </>
  )
}
