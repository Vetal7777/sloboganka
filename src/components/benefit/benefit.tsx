import styles from './benefit.module.css';
import {BenefitI} from "../../model/state";

export default function Benefit({item}:{item:BenefitI | undefined}){
    return (
        <>
            <div className={styles.container}>
                {item?.ico}
                <div className={styles.content}>
                    <span
                        className={styles.title}
                        children={item?.title}
                    />
                    <span
                        className={styles.content}
                        children={item?.content}
                    />
                </div>
            </div>
        </>
    )
}