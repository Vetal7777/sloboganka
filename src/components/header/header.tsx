import styles from './header.module.css'
import {useAppSelector} from "../../hooks/redux";

export default function Header(){
    const header = useAppSelector(({content}) => content?.header)

    return (
        <>
            <div
                className={styles.container}
                id={'header'}
            >
                {header?.map((headerItem,index) => (
                    <a
                        key={index}
                        style={{
                            order : index > header.length/2 ? 2 : 0
                        }}
                        className={styles.item}
                        children={headerItem.title}
                        href={headerItem.link}
                    />
                ))}
                <a
                    href='#'
                    className={styles.logo}
                />
            </div>
        </>
    )
}