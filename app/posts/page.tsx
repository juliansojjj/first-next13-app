import styles from './posts.module.css'
import Link from 'next/link'

export type Post = {
    userId:Number;
    id:Number;
    title:String;
    body:String;
}

const data = async():Promise<Post[]>=>{
    await new Promise(resolve=>setTimeout(resolve,3000))
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .catch(err=>{})
}

export default async function Posts(){
    const repository = await data()

    return(
        <div>
            <p>Esta NO es una url dinámica, sin embargo, podés acceder a esa función clickeando los diferentes posts</p>
            <div className={styles.container}>
            {repository.map((item,i)=>{return(
                <Link href={`posts/${item.id}`} key={i} className={styles.containerSon}>
                {item.title}
                </Link>
            )})}
            </div>
        </div>
    )
}