import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'

const Blog = ({entradas}) => {

  return (
    <div>
        <Layout
            pagina='Blog'
        >
            <main className='contenedor'>
                  <h2 className='heading'>Blog</h2>
                  <div className={styles.blog}>
                      {entradas.map(entrada => (
                        <Entrada
                            key={entrada.id}
                            entrada={entrada}
                        />
                      ))}
                  </div>
            </main>
      </Layout>
    </div>
  )
}
//getServerSideProps getStaticProps
export async function getStaticProps() {

  const url = 'http://localhost:1337/blogs';
        const respuesta = await fetch(url);
        const entradas = await respuesta.json();

  return {
    props: {
      entradas
    }
  }
}

export default Blog