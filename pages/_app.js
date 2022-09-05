import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Head from 'next/head'

import Header from "../components/Header";
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return(
  <>
  <Head>
        <title>Real Estate</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </Head>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  ) 
}

export default MyApp
