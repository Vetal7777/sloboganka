import { useMemo } from 'react'
import { HistoryItemProps } from '../../@types'
import { HistoryIcon } from '../history-print/history-print'
import styles from './history-item.module.css'

export function HistoryItem({ item, way }: HistoryItemProps) {
  const wayClass = useMemo(() => (way ? styles.reverse : styles.row), [way])
  const { title, content, print, icoComponent } = item
  const contaninerClasses = useMemo(
    () => `${styles.container} ${wayClass}`,
    [wayClass]
  )

  return (
    <>
      <div className={contaninerClasses}>
        <div className={styles.content}>
          {icoComponent}
          <h3 className={styles.title} children={title} />
          <p className={styles.text} children={content} />
        </div>
        <HistoryIcon print={print} />
      </div>
    </>
  )
}
