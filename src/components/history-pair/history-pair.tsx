import { useMemo } from 'react'
import { HistoryItemI } from '../../model/state'
import HistoryItem from '../history-item/history-item'
import styles from './history-pair.module.css'

export default function HistoryPair({
  print,
  pair
}: {
  print: boolean
  pair: HistoryItemI[]
}) {
  const printClass = useMemo(() => (print ? styles.print : ''), [print])
  const borderClass = useMemo(() => (!print ? styles.border : ''), [print])

  return (
    <>
      <div className={`${styles.back} ${printClass}`}>
        <div className={`${styles.container} ${borderClass}`}>
          {pair.map((item, index) => (
            <HistoryItem way={Boolean(index)} key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
