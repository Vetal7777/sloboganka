import { useDispatch } from 'react-redux'
import { appSlice } from '../../store/reducers/appSlice'
import styles from './toggle-menu-button.module.css'

export function ToggleMenuButton() {
  const dispatch = useDispatch()
  const toggleMenuStatus = () => dispatch(appSlice.actions.toggleMenuStatus())

  return (
    <>
      <button className={styles.container} onClick={toggleMenuStatus}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
    </>
  )
}
