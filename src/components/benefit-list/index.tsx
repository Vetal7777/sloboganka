import {
  MdHealthAndSafety,
  MdLocalShipping,
  MdReplayCircleFilled,
  MdVerified
} from 'react-icons/md'
import { benefits } from '../../data/content'
import { Benefit } from '../benefit'
import styles from './benefit-list.module.css'

export function BenefitList() {
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

  return (
    <>
      <div className={styles.background} id={'benefits'}>
        <div className={styles.container}>
          {benefitsList.map(
            (benefit, key) => benefit && <Benefit item={benefit} key={key} />
          )}
        </div>
      </div>
    </>
  )
}
