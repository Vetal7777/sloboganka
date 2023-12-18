import { useDispatch } from 'react-redux'
import { appSlice } from '../../store/reducers/appSlice'
import styles from './exit-button.module.css'

export default function ExitButton() {
  const dispatch = useDispatch()

  const toggleMenuStatus = () => dispatch(appSlice.actions.toggleMenuStatus())

  return (
    <>
      <button className={styles.exit} onClick={toggleMenuStatus}>
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
    </>
  )
}
