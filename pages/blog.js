import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog';

const Blog = ({entradas}) => {

  return (
    <div>
        <Layout
            pagina='Blog'
        >
            <main className='contenedor'>
                 <ListadoBlog
                    entradas={entradas}
                 />
            </main>
      </Layout>
    </div>
  )
}
//getServerSideProps getStaticProps
export async function getStaticProps() {

        const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
        const respuesta = await fetch(url);
        const entradas = await respuesta.json();
        console.log(url)
  return {
    props: {
      entradas
    }
  }
}

export default Blog