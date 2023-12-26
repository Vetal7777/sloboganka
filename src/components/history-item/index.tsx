import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { HistoryItemProps } from '../../@types'
import { HistoryIcon } from '../history-print'
import styles from './history-item.module.css'

export function HistoryItem({ item, way }: HistoryItemProps) {
  const wayClass = useMemo(() => (way ? styles.reverse : styles.row), [way])
  const { title, content, print, icoComponent } = item
  const contaninerClasses = useMemo(
    () => `${styles.container} ${wayClass}`,
    [wayClass]
  )
  const { t } = useTranslation()

  return (
    <>
      <div className={contaninerClasses}>
        <div className={styles.content}>
          {icoComponent}
          <h3 className={styles.title} children={t(title)} />
          <p className={styles.text} children={t(content)} />
        </div>
        <HistoryIcon print={print} />
      </div>
    </>
  )
}
