import {HistoryItemI} from "../../model/state";
import styles from './history-item.module.css'

export default function HistoryItem({item,way}:{item:HistoryItemI,way:boolean}){
    return (
        <>
            <div
                className={styles.container}
                style={{flexDirection: way ? 'row-reverse' : 'row'}}
            >
                <div className={styles.content}>
                    <h3
                        className={styles.title}
                        children={item.title}
                    />
                    <p
                        className={styles.text}
                        children={item.content}
                    />
                </div>
                <div className={styles.print}></div>
            </div>
        </>
    )
}