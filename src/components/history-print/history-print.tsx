import styles from './history-print.module.css'

export default function HistoryIcon({ print }: { print: string }) {
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
