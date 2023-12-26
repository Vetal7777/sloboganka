import { useEffect, useState } from 'react'
import { header } from '../../data/content'
import { HeaderNavItem } from '../header-nav-ltem'
import { ToggleMenuButton } from '../toggle-menu-button'
import styles from './header.module.css'
const MAX_DESKTOP_WIDTH = 720
const HALF_HEADER_FLEX_BASIS = 40

export function Header() {
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
    return window.innerWidth < MAX_DESKTOP_WIDTH
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.list}>
          {header.map(({ title, link }, index) => {
            const halfLength = header.length / 2
            const roundedHalfLength = Math.round(halfLength)
            const showLogo = roundedHalfLength === index
            const flexBasis = HALF_HEADER_FLEX_BASIS / roundedHalfLength + '%'

            return (
              <>
                {showLogo && <a href="#" className={styles.logo} />}
                {!isMobile && (
                  <HeaderNavItem
                    key={index}
                    title={title}
                    link={link}
                    flexBasis={flexBasis}
                  />
                )}
              </>
            )
          })}
        </div>
        {isMobile && <ToggleMenuButton />}
      </div>
    </>
  )
}
