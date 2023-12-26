import { HeaderNavProps } from '../../@types'
import styles from './header-nav-ltem.module.css'

export function HeaderNavItem({ title, link, flexBasis }: HeaderNavProps) {
  return (
    <>
      <a
        className={styles.item}
        children={title}
        href={link}
        style={{ flexBasis }}
      />
    </>
  )
}
