import { useAppSelector } from '../../hooks/redux'
import { GoodI } from '../../model/state'
import Good from '../good/good'
import styles from './goods.module.css'

export default function Goods() {
  const goods = useAppSelector(({ content }) => content?.goods) as GoodI[]
  const id = useAppSelector((state) => state.content?.header[2].link)?.replace(
    '#',
    ''
  )
  return (
    <>
      <div className={styles.container} id={id}>
        {goods.map((good, index) => (
          <Good index={index} key={index} item={good} />
        ))}
      </div>
    </>
  )
}
