import { goods } from '../../data/content'
import { Good } from '../good'
import styles from './goods.module.css'

export function Goods() {
  return (
    <>
      <div className={styles.container} id={'goods'}>
        {goods.map((good, index) => (
          <Good index={index} key={index} item={good} />
        ))}
      </div>
    </>
  )
}
