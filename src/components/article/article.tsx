import { useAppSelector } from '../../hooks/redux'
import styles from './article.module.css'

export default function Article(){
    const content = useAppSelector(({content}) => content?.article);
    const id = useAppSelector(state => state.content?.header[0].link)
        ?.replace('#','')
    return (
        <>
            <div 
                className={styles.background}
                id={id}
            >
                <div className={styles.container}>
                    <h1
                        className={styles.title}
                        children={content?.title_h1}
                    />
                    <h2
                        className={styles.title}
                        children={content?.title_h2}
                    />
                    <iframe
                        className={styles.youtube}
                        src={content?.preview_video_link}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </>
    )
}