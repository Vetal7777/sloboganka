import styles from './benefits.module.css'
import {useAppSelector} from "../../hooks/redux";
import Benefit from "../benefit/benefit";
import {
    MdVerified,
    MdReplayCircleFilled,
    MdLocalShipping,
    MdHealthAndSafety
} from "react-icons/md";

export default function Benefits(){
    const style = {
        fill: 'white',
        minWidth: '30px',
        minHeight: '30px',
    }

    const benefits = useAppSelector(({content}) => content?.benefits)
        ?.map((benefit,index) => {
            switch (true){
                case index === 0:
                    return {...benefit,ico: <MdVerified style={style}/>}
                break;
                case index === 1:
                    return {...benefit,ico: <MdReplayCircleFilled style={style}/>}
                break;
                case index === 2:
                    return {...benefit,ico: <MdLocalShipping style={style}/>}
                break;
                case index === 3:
                    return {...benefit,ico: <MdHealthAndSafety style={style}/>}
                break;
            }
        });
    return (
        <>
            <div
                className={styles.background}
                id={'about'}
            >
                <div className={styles.container}>
                    {benefits?.map((benefit,key) => (
                        <Benefit item={benefit} key={key}/>
                    ))}
                </div>
            </div>
        </>
    )
}