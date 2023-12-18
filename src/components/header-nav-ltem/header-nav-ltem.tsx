import styles from './header-nav-ltem.module.css'

export default function HeaderNavItem({
  title,
  link
}: {
  title: string
  link: string
}) {
  return (
    <>
      <a className={styles.item} children={title} href={link} />
    </>
  )
}
