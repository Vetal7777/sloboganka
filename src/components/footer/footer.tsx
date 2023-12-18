import { useAppSelector } from '../../hooks/redux'
import styles from './footer.module.css'

export default function Footer() {
  const content = useAppSelector(({ content }) => content?.contacts)
  const id = useAppSelector((state) => state.content?.header[4].link)?.replace(
    '#',
    ''
  )
  return (
    <>
      <div className={styles.container} id={id}>
        <div className={styles.phones}>
          {content?.phones.map((phone, index) => (
            <span children={phone} key={index} className={styles.phone} />
          ))}
        </div>
        <div className={styles.contacts}>
          <a
            href="mailto:sloboganka2@ukr.net"
            className={styles.mail}
            children={content?.mail}
          />
          <span children={content?.location} className={styles.location} />
        </div>
      </div>
    </>
  )
}
