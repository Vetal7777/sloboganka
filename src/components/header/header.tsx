import styles from './header.module.css'
import {useAppSelector} from "../../hooks/redux";

export default function Header(){
    const header = useAppSelector(({content}) => content?.header)
    const headerLeft = header?.slice(0,Math.round(header?.length/2));
    const headerRight = header?.slice(Math.round(header?.length/2),header?.length);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.list}>
                    {headerLeft?.map((headerItem,index) => (
                        <a
                            key={index}
                            className={styles.item}
                            children={headerItem.title}
                            href={headerItem.link}
                        />
                    ))}
                </div>
                <a
                    href='#'
                    className={styles.logo}
                />
                <div className={styles.list}>
                    {headerRight?.map((headerItem,index) => (
                        <a
                            key={index}
                            className={styles.item}
                            children={headerItem.title}
                            href={headerItem.link}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}