import localfont from '@next/font/local'
import Image from 'next/image'
import Foto from './egreso.jpg'

const font = localfont({src:'./GaramondPremrPro.otf'})

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
            ?   repository.map((item,i)=>{
                return(
                <div className={font.className} key={i}>
                    {/*debería mostrar garamnod pero toma roboto de los posts(?*/}
                    <Image src={Foto} alt='Random photo' width={50} height={50}/>
                    {/*me funka con imagen local, con imagen de url NO, para nada, pero en teoria la config de next esta BIEN*/}
                    <Image src="https://picsum.photos/200/200" alt='Random photo' width={50} height={50}/>
                    <h3>{item.email}</h3>
                    <p>{item.body}</p>
                </div>) 
                })
            : ''}
        </>
    )
  }