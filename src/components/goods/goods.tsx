import styles from './goods.module.css';
import {useAppSelector} from "../../hooks/redux";
import {GoodI} from "../../model/state";
import Good from "../good/good";

export default function Goods(){
    const goods = useAppSelector(({content}) => content?.goods) as GoodI[];
    return (
        <>
            <div className={styles.container}>
                {goods.map((good,key) => (
                    <Good
                        key={key}
                        item={good}
                    />
                ))}
            </div>
        </>
    )
}