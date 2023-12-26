import { useTranslation } from 'react-i18next'
import { contacts } from '../../data/content'
import styles from './footer.module.css'

export function Footer() {
  const { phones, mail, location } = contacts
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container} id={'contacts'}>
        <div className={styles.phones}>
          {phones.map((phone, index) => (
            <span children={phone} key={index} className={styles.phone} />
          ))}
        </div>
        <div className={styles.contacts}>
          <a
            href="mailto:sloboganka2@ukr.net"
            className={styles.mail}
            children={mail}
          />
          <span children={t(location)} className={styles.location} />
        </div>
      </div>
    </>
  )
}
