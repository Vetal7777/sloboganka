import { HistoryIconProps } from '../../@types'
import styles from './history-print.module.css'

export function HistoryIcon({ print }: HistoryIconProps) {
  return (
    <>
      <div
        className={styles.print}
        style={{
          backgroundImage: `url(./assets/images/${print}.webp)`
        }}
      />
    </>
  )
}
