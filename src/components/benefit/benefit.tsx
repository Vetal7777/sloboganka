import styles from './benefit.module.css';
import {BenefitI} from "../../model/state";

export default function Benefit({item}:{item:BenefitI | undefined}){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.article}>
                    {item?.ico}
                    <h3
                        className={styles.title}
                        children={item?.title}
                    />
                </div>
                <span
                    className={styles.content}
                    children={item?.content}
                />
            </div>
        </>
    )
}