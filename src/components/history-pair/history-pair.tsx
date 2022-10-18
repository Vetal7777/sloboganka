import styles from './history-pair.module.css';
import {HistoryItemI} from "../../model/state";
import HistoryItem from "../history-item/history-item";

export default function HistoryPair({print,pair}:{print:boolean,pair:HistoryItemI[]}){
    return (
        <>
            <div className={`${styles.back} ${print ? styles.print : ''}`}>
                <div className={`${styles.container} ${!print ? styles.border : ''}`}>
                    {pair.map((item,index) => (
                        <HistoryItem
                            way={!!index}
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}