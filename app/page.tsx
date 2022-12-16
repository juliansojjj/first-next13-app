import Link from "next/link"

export default function Home(){
    return(
        <div>
            <h1>Bienvenido a mi primera app en Next.js!</h1>
            <h2>En este caso estamos usando su versión 13</h2>
            <p>¿Querés ver url dinámicas en funcionamiento? <Link href='posts'>Clickeá acá</Link></p>
        </div>
    )
}