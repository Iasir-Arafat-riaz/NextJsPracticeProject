import Footer from '../components/Footer'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import "../styles/header.css"
import "../styles/home.css"



function MyApp({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />
  
  <Footer/>
  </>
}

export default MyApp
