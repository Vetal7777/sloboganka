import { HeaderNavProps } from '../../@types'
import styles from './header-nav-ltem.module.css'

export function HeaderNavItem({ title, link }: HeaderNavProps) {
  return (
    <>
      <a className={styles.item} children={title} href={link} />
    </>
  )
}
