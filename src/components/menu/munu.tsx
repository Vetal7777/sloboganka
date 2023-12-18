import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/redux'
import { appSlice } from '../../store/reducers/appSlice'
import ExitButton from '../exit-button/exit-button'
import styles from './menu.module.css'

export default function Menu() {
  const dispatch = useDispatch()

  const header = useAppSelector(({ content }) => content?.header)
  const show = useAppSelector((state) => state.showMenu)
  const statusClass = useMemo(() => (!show ? styles.hide : ''), [show])

  const toggleMenuStatus = () => dispatch(appSlice.actions.toggleMenuStatus())

  return (
    <>
      <nav className={`${styles.container} ${statusClass}`}>
        <div className={styles.list}>
          {header?.map(({ title, link }, index) => (
            <a
              className={styles.item}
              key={index}
              children={title}
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
