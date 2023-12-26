import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './language-toggler.module.css'
const LANGUAGE_VARIABLES = ['en', 'ukr']

export function LanguageToggler() {
  const { i18n } = useTranslation()

  const currentLanguage = useMemo(() => i18n.language, [i18n.language])
  const anotherLanguage = useMemo(
    () => LANGUAGE_VARIABLES.find((item) => item !== currentLanguage),
    [currentLanguage]
  )

  function toggleLanguage() {
    i18n.changeLanguage(anotherLanguage)
  }

  return (
    <>
      <button
        className={styles.container}
        children={anotherLanguage?.toUpperCase()}
        onClick={toggleLanguage}
      />
    </>
  )
}
