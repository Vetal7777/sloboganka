import { header } from '../../data/content'
import { HeaderNavItem } from '../header-nav-ltem/header-nav-ltem'
import { ToggleMenuButton } from '../toggle-menu-button/toggle-menu-button'
import styles from './header.module.css'

export function Header() {
  const headerFirstList = header?.slice(0, Math.round(header?.length / 2))
  const headerRightList = header?.slice(
    Math.round(header?.length / 2),
    header?.length
  )

  return (
    <>
      <div className={styles.container}>
        <div className={styles.list}>
          {headerFirstList?.map(({ title, link }, index) => (
            <HeaderNavItem key={index} title={title} link={link} />
          ))}
        </div>
        <a href="#" className={styles.logo} />
        <div className={styles.list}>
          {headerRightList?.map(({ title, link }, index) => (
            <HeaderNavItem key={index} title={title} link={link} />
          ))}
        </div>
        <ToggleMenuButton />
      </div>
    </>
  )
}
