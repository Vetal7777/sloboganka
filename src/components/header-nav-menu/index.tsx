import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { header } from '../../data/content'
import { useAppSelector } from '../../hooks/redux'
import { appSlice } from '../../store/reducers/appSlice'
import { ExitButton } from '../exit-button'
import styles from './header-nav-menu.module.css'

export function HeaderNavMenu() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const show = useAppSelector((state) => state.showMenu)
  const statusClass = useMemo(() => (!show ? styles.hide : ''), [show])

  const toggleMenuStatus = () => dispatch(appSlice.actions.toggleMenuStatus())
  const containerClass = useMemo(
    () => `${styles.container} ${statusClass}`,
    [statusClass]
  )

  return (
    <>
      <nav className={containerClass}>
        <div className={styles.list}>
          {header.map(({ title, link }, index) => (
            <a
              className={styles.item}
              key={index}
              children={t(title)}
              href={link}
              onClick={toggleMenuStatus}
            />
          ))}
        </div>
        <ExitButton />
      </nav>
    </>
  )
}
