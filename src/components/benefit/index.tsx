import { useTranslation } from 'react-i18next'
import { BenefitProps } from '../../@types'
import styles from './benefit.module.css'

export function Benefit({ item }: BenefitProps) {
  const { title, content, icoComponent } = item
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.article}>
          {icoComponent}
          <h3 className={styles.title} children={t(title)} />
        </div>
        <span className={styles.content} children={t(content)} />
      </div>
    </>
  )
}
