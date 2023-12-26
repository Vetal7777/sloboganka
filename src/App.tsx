import { useMemo } from 'react'
import './App.css'
import styles from './App.module.css'
import './assets/fonts/Open Sans /OpenSans-Regular.ttf'
import { Article } from './components/article'
import { BenefitList } from './components/benefit-list'
import { ErrorMessage } from './components/error-message'
import { Footer } from './components/footer'
import { Goods } from './components/goods'
import { Header } from './components/header'
import { HeaderNavMenu } from './components/header-nav-menu'
import { HistoryList } from './components/history-list'
import { LanguageToggler } from './components/language-toggler'
import { LoaderSpinner } from './components/loader-spinner'
import { useAppSelector } from './hooks/redux'
import './i18n/config'

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
            <HeaderNavMenu />
            <Header />
            <Article />
            <Goods />
            <BenefitList />
            <HistoryList />
            <Footer />
            <LanguageToggler />
          </div>
        )}
        <LoaderSpinner />
        <ErrorMessage />
      </div>
    </>
  )
}

export default App
