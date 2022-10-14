import styles from './good.module.css'
import {GoodI} from "../../model/state";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Good({item}:{item:GoodI}){
    const pics = new Array(item.pic_length)
        .fill('')
        .map((elem,index) => `${item.id}-${index + 1}.png`);
    console.log(pics)
    return (
        <>
            <div className={styles.container}>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    showStatus={false}
                    infiniteLoop={true}
                    showIndicators={false}
                >
                    {pics.map(picture => (
                        <img
                            src={`./assets/images/${item.id}/${picture}`}
                            className={styles.slide}
                        />
                    ))}
                </Carousel>
                <div className={styles.content}>
                    <h3
                        className={styles.title}
                        children={item.title}
                    />
                    {item.content.map(advantage => (
                        <span
                            className={styles.advantage}
                            children={advantage}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}