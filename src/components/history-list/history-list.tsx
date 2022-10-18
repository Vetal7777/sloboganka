import styles from './history-list.module.css'
import {useAppSelector} from "../../hooks/redux";
import {HistoryItemI} from "../../model/state";

export default function HistoryList(){
    const content:HistoryItemI[] = useAppSelector(({content}) => content?.history) as HistoryItemI[];
    return (
        <>
            <div className={styles.container}>
                {content.map((item,key) => (
                    <></>
                ))}
            </div>
        </>
    )
}