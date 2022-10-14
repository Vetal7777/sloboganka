import styles from './good.module.css'
import {GoodI} from "../../model/state";

export default function Good({item}:{item:GoodI}){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3
                        className={styles.title}
                        children={item.title}
                    />
                </div>
            </div>
        </>
    )
}