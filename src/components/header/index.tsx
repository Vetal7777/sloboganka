import { useEffect, useState } from 'react'
import { header } from '../../data/content'
import { HeaderNavItem } from '../header-nav-ltem'
import { ToggleMenuButton } from '../toggle-menu-button'
import styles from './header.module.css'

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
    return window.innerWidth < 720
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.list}>
          {header.map(({ title, link }, index) => {
            const halfLength = header.length / 2
            const roundedHalfLength = Math.round(halfLength)
            const showLogo = roundedHalfLength === index
            const flexBasis = 40 / roundedHalfLength + '%'

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
