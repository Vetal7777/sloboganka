import {
  MdHealthAndSafety,
  MdLocalShipping,
  MdReplayCircleFilled,
  MdVerified
} from 'react-icons/md'
import { benefits, header } from '../../data/content'
import { Benefit } from '../benefit'
import styles from './benefits.module.css'

export function Benefits() {
  const iconStyle = {
    fill: 'white',
    minWidth: '30px',
    minHeight: '30px'
  }

  const benefitsList = benefits.map((benefit, index) => {
    switch (true) {
      case index === 0:
        return { ...benefit, icoComponent: <MdVerified style={iconStyle} /> }
        break
      case index === 1:
        return {
          ...benefit,
          icoComponent: <MdReplayCircleFilled style={iconStyle} />
        }
        break
      case index === 2:
        return {
          ...benefit,
          icoComponent: <MdLocalShipping style={iconStyle} />
        }
        break
      case index === 3:
        return {
          ...benefit,
          icoComponent: <MdHealthAndSafety style={iconStyle} />
        }
        break
    }
  })
  const id = header[3].link.replace('#', '')

  return (
    <>
      <div className={styles.background} id={id}>
        <div className={styles.container}>
          {benefitsList?.map(
            (benefit, key) => benefit && <Benefit item={benefit} key={key} />
          )}
        </div>
      </div>
    </>
  )
}
