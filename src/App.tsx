import { useMemo } from 'react'
import './App.css'
import styles from './App.module.css'
import './assets/fonts/Open Sans /OpenSans-Regular.ttf'
import { Article } from './components/article/article'
import { Benefits } from './components/benefits/benefits'
import { ErrorMessage } from './components/error-message/error-message'
import { Footer } from './components/footer/footer'
import { Goods } from './components/goods/goods'
import { Header } from './components/header/header'
import { HistoryList } from './components/history-list/history-list'
import { LoaderSpinner } from './components/loader-spinner/loader-spinner'
import { Menu } from './components/menu/munu'
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
