import { useTranslation } from 'react-i18next'
import { HeaderNavProps } from '../../@types'
import styles from './header-nav-ltem.module.css'

export function HeaderNavItem({ title, link, flexBasis }: HeaderNavProps) {
  const { t } = useTranslation()

  return (
    <>
      <a
        className={styles.item}
        children={t(title)}
        href={link}
        style={{ flexBasis }}
      />
    </>
  )
}
