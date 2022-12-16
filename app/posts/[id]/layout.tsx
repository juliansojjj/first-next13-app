import type { Post } from '../page';
import Link from 'next/link';
import React from 'react';

type Item = [
    number,
    number,
    string,
    string
]

const data = (id:string|number):Promise<Post>=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .catch(err=>{})
}

type BothParameters = {
    params:{id:string|number},
    children: React.ReactNode
}

export default async function Layout({params, children}:BothParameters ) {

    const {id} = params;
    const repository = await data(id)

    return (<>
        {repository 
            ?   <div>
                <h1>{repository.title}</h1>
                <h3>By user <>{repository.userId}</></h3>
                <p>{repository.body}</p>
                </div> 
            : 'Loading...'}
            <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
            {children}
        </>
    )
  }