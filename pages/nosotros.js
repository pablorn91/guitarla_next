import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <div>
        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.contenido}>

                  <Image layout='responsive' src="/img/nosotros.jpg" width={600} height={450} alt="Imagen sobre nosotros"/>

                  <div>
                     <p>Integer odio nibh, maximus vel blandit a, ullamcorper sagittis nulla. Nullam augue urna, elementum vel mollis vitae, pulvinar vel tellus. Quisque sed ornare felis, non imperdiet lorem. Aliquam id volutpat nibh. Nullam aliquet lacus non elit efficitur, non pretium mi dapibus. Mauris id ultrices libero. Sed hendrerit, mauris in tincidunt tincidunt, sem tortor tempus purus, nec scelerisque turpis nisi id leo. Vivamus vehicula tellus ipsum, in consectetur mauris  commodo m feugiat. Vivamus pharetra eu justo sed feugiat. Vivamus ornare sapien nec nisi venenatis finibus. Pellentesque eget erat nulla. Nullam iaculis quam at enim commodo porttitor.</p>
                     <p>Integer odio nibh, maximus vel blandit a, ullamcorper sagittis nulla. Nullam augue urna, elementum vel mollis vitae, pulvinar vel tellus. Quisque sed ornare felis, non imp id volutpat nibh. Nullam aliquet lacus non elit efficitur, non pretium mi dapibus. Mauris id ultrices libero. Sed hendrerit, mauris in tincidunt tincidunt, sem tortor tempus purus, nec scelerisque turpis nisi id leo. Vivamus vehicula tellus ipsum, in consectetur mauris  commodo mi quis turpis aliquam feugiat. Vivamus pharetra eu justo sed feugiat. Vivamus ornare sapien nec nisi venenatis finibus. Pellentesque eget erat nulla. Nullam iaculis quam at enim commodo porttitor.</p>
                  </div>
                </div>
            </main>
      </Layout>
    </div>
  )
}

export default Nosotros