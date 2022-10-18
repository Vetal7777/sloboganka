import styles from './history-list.module.css'
import {useAppSelector} from "../../hooks/redux";
import HistoryPair from "../history-pair/history-pair";

export default function HistoryList(){
    const content = useAppSelector(({content}) => content?.history);
    return (
        <>
            <div className={styles.container}>
                {
                    content
                        ?.map((historyItem,index) => [historyItem,content[index + 1]])
                        .filter((elem,index) => ++index % 2 ? elem : undefined)
                        .map((historyPair,index) => {
                            return (
                                <>
                                    <HistoryPair
                                        pair={historyPair}
                                        print={!(++index % 2)}
                                        key={index}
                                    />
                                </>
                            )
                        })
                }
            </div>
        </>
    )
}