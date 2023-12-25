import { BenefitProps } from '../../@types'
import styles from './benefit.module.css'

export function Benefit({ item }: BenefitProps) {
  const { title, content, icoComponent } = item

  return (
    <>
      <div className={styles.container}>
        <div className={styles.article}>
          {icoComponent}
          <h3 className={styles.title} children={title} />
        </div>
        <span className={styles.content} children={content} />
      </div>
    </>
  )
}
