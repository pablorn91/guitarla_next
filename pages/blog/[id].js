import { useRouter } from 'next/router'

const EntradaBlog = ({entrada}) => {
    console.log(entrada)
  return (
    <div>
        <h1>EntradaBlog</h1>
    </div>
  )
}

export async function getStaticPaths () {
    const url = `${process.env.API_URL}/blogs`;
    console.log(url)
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada => ({
        params: {id: entrada.id.toString()}
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: {id} }) {

    const url = `${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url);
    const entrada = await respuesta.json();
    return {
        props: {
            entrada 
        }
    }
}

// export async function getServerSideProps({ query: {id} }) {
//     const url = `${process.env.API_URL}/blogs/${id}`
//     console.log(url)
//     const respuesta = await fetch(url);
//     const entrada = await respuesta.json();
//     console.log(entrada)
//     return {
//         props: {
//             entrada 
//         }
//     }
// }

export default EntradaBlog