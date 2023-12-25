import { useMemo } from 'react'
import './App.css'
import styles from './App.module.css'
import './assets/fonts/Open Sans /OpenSans-Regular.ttf'
import { Article } from './components/article'
import { Benefits } from './components/benefits'
import { ErrorMessage } from './components/error-message'
import { Footer } from './components/footer'
import { Goods } from './components/goods'
import { Header } from './components/header'
import { HistoryList } from './components/history-list'
import { LoaderSpinner } from './components/loader-spinner'
import { Menu } from './components/menu'
import { useAppSelector } from './hooks/redux'

function App() {
  const showError = useAppSelector(({ error }) => Boolean(error))
  const isLoading = useAppSelector(({ isLoading }) => Boolean(isLoading))

  const showApp = useMemo(
    () => !(showError || isLoading),
    [showError, isLoading]
  )
  return (
    <>
      <div className={'container'}>
        {showApp && (
          <div className={styles.show}>
            <Menu />
            <Header />
            <Article />
            <Goods />
            <Benefits />
            <HistoryList />
            <Footer />
          </div>
        )}
        <LoaderSpinner />
        <ErrorMessage />
      </div>
    </>
  )
}

export default App
