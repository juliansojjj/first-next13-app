import Link from "next/link"
import styles from './HeaderLayout.module.css'

export default function HeaderLayout(){
    return(
        <div className={styles.header}>
            <Link href='/'>Home</Link>
            <input type="text" />
            <Link href='about'>About</Link>
        </div>
    )
}