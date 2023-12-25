import { useMemo } from 'react'
import { useAppSelector } from '../../hooks/redux'
import styles from './error-message.module.css'

export function ErrorMessage() {
  const error = useAppSelector(({ error }) => error)
  const showError = useMemo(() => Boolean(error), [error])

  return (
    <>
      {showError && (
        <div className={styles.container}>
          <div className={styles.message}>
            <span className={styles.cycle}>!</span>
            {error}
          </div>
        </div>
      )}
    </>
  )
}
