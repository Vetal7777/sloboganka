import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import styles from './menu.module.css';
import {appSlice} from "../../store/reducers/appSlice";

export default function Menu(){
    const header = useAppSelector(({content}) => content?.header)
    const show =useAppSelector(state => state.showMenu);
    const dispatch = useDispatch();

    return (
        <>
            <div className={`${styles.container} ${!show ? styles.hide : ''}`}>
                <div className={styles.list}>
                    {header?.map((item,index) => (
                        <a
                            className={styles.item}
                            key={index}
                            children={item.title}
                            href={item.link}
                            onClick={() => dispatch(appSlice.actions.toggleMenuStatus())}
                        />
                    ))}
                </div>
                <button
                    className={styles.exit}
                    onClick={() => dispatch(appSlice.actions.toggleMenuStatus())}
                >
                    <span className={styles.line}/>
                    <span className={styles.line}/>
                </button>
            </div>
        </>
    )
}