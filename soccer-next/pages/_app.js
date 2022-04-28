import '@/styles/globals.css'
import { wrapper } from '@/modules/store'
import { Header, Nav, Footer } from '@/components'

const MyApp = ({ Component, pageProps }) => {
  return (<>
    <Header/>
    <Nav/>
    <Component {...pageProps} />
    <Footer/>
  </>)
}

export default wrapper.withRedux(MyApp)
