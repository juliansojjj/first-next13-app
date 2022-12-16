import styles from '../../posts.module.css'

export default function Loading(){
    return(
        <div className={styles.containerFlex}>
            <div className={styles.containerLoadingSon}></div>
            <div className={styles.containerLoadingSon}></div>
            <div className={styles.containerLoadingSon}></div>
            <div className={styles.containerLoadingSon}></div>
        </div>
    )
}