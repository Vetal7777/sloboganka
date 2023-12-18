import { useAppSelector } from '../../hooks/redux'
import HeaderNavItem from '../header-nav-ltem/header-nav-ltem'
import ToggleMenuButton from '../toggle-menu-button/toggle-menu-button'
import styles from './header.module.css'

export default function Header() {
  const header = useAppSelector(({ content }) => content?.header)
  const headerFirstList = header?.slice(0, Math.round(header?.length / 2))
  const headerRightList = header?.slice(
    Math.round(header?.length / 2),
    header?.length
  )

  return (
    <>
      <div className={styles.container}>
        <div className={styles.list}>
          {headerFirstList?.map((headerItem, index) => (
            <HeaderNavItem
              key={index}
              title={headerItem.title}
              link={headerItem.link}
            />
          ))}
        </div>
        <a href="#" className={styles.logo} />
        <div className={styles.list}>
          {headerRightList?.map((headerItem, index) => (
            <HeaderNavItem
              key={index}
              title={headerItem.title}
              link={headerItem.link}
            />
          ))}
        </div>
        <ToggleMenuButton />
      </div>
    </>
  )
}
