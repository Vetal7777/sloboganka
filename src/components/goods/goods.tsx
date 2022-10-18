import styles from './goods.module.css';
import {useAppSelector} from "../../hooks/redux";
import {GoodI} from "../../model/state";
import Good from "../good/good";

export default function Goods(){
    const goods = useAppSelector(({content}) => content?.goods) as GoodI[];
    return (
        <>
            <div
                className={styles.container}
                id={'goods'}
            >
                {goods.map((good,index) => (
                    <Good
                        index={index}
                        key={index}
                        item={good}
                    />
                ))}
            </div>
        </>
    )
}