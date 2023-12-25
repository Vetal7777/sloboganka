import { Oval } from 'react-loader-spinner'
import { useAppSelector } from '../../hooks/redux'
import styles from './loader-spinner.module.css'

export function LoaderSpinner() {
  const isLoading = useAppSelector(({ isLoading }) => Boolean(isLoading))

  return (
    <>
      {isLoading && (
        <div className={styles.container}>
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="red"
            secondaryColor="white"
          />
        </div>
      )}
    </>
  )
}
