import { useMemo } from 'react'
import { HistoryItemI } from '../../model/state'
import HistoryPrint from '../history-print/history-print'
import styles from './history-item.module.css'

export default function HistoryItem({
  item,
  way
}: {
  item: HistoryItemI
  way: boolean
}) {
  const wayClass = useMemo(() => (way ? styles.reverse : styles.row), [way])

  return (
    <>
      <div className={`${styles.container} ${wayClass}`}>
        <div className={styles.content}>
          {item.ico}
          <h3 className={styles.title} children={item.title} />
          <p className={styles.text} children={item.content} />
        </div>
        <HistoryPrint print={item.print} />
      </div>
    </>
  )
}
