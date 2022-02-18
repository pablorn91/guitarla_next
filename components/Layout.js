import Head from "next/head"

const Layout = ({ children, pagina }) => {
  return (
    <div>
        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content="Sitio web de venta de guitarras" />
        </Head>
        <h1>Desde Layout</h1>
        {children}
    </div>
  )
}

export default Layout