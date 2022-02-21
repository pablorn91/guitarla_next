import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({ guitarras, curso, entradas }) {
  return (
    <div>
      <Layout
        pagina='Inicio'
        guitarra={guitarras[3]}
      >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>

      <Curso 
        curso={curso}
      />
      <section className='contenedor'>
          <ListadoBlog 
          entradas={entradas}
          />
      </section>

      </Layout>

    </div>
  )
  
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6`
  const urlCurso = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [ resGuitarras, resCurso, resBlogs ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlogs)
  ])

  const [ guitarras, curso, entradas ] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlogs.json()
  ])
 

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}