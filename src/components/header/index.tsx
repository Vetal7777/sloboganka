import { useEffect, useState } from 'react'
import { header } from '../../data/content'
import { HeaderNavItem } from '../header-nav-ltem'
import { ToggleMenuButton } from '../toggle-menu-button'
import styles from './header.module.css'

export function Header() {
  const headerFirstList = header.slice(0, Math.round(header.length / 2))
  const headerRightList = header.slice(
    Math.round(header?.length / 2),
    header.length
  )
  const [isMobile, setIsMobile] = useState(isMobileSize())

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  function handleResize() {
    if (isMobileSize()) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  function isMobileSize() {
    return window.innerWidth < 720
  }

  return (
    <>
      <div className={styles.container}>
        {!isMobile && (
          <div className={styles.list}>
            {headerFirstList?.map(({ title, link }, index) => (
              <HeaderNavItem key={index} title={title} link={link} />
            ))}
          </div>
        )}
        <a href="#" className={styles.logo} />
        {!isMobile && (
          <div className={styles.list}>
            {headerRightList?.map(({ title, link }, index) => (
              <HeaderNavItem key={index} title={title} link={link} />
            ))}
          </div>
        )}
        {isMobile && <ToggleMenuButton />}
      </div>
    </>
  )
}
