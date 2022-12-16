type Params = {
    params:{id:string|number}
}

const data = (id:string|number):Promise<Item[]>=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res=>res.json())
    .catch(err=>{})
}

type Item = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export default async function Comments({params}:Params) {

    const {id} = params;
    const repository = await data(id)

    return (<>
        {repository 
            ?   repository.map(item=>{
                return(<div>
                <h3>{item.email}</h3>
                <p>{item.body}</p>
                </div>) 
                })
            : ''}
        </>
    )
  }