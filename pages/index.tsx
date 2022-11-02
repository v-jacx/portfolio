import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from'../components/Experience'

const Home: NextPage = () => {
  return (
    <div className='bg-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0 roboto-condensed'>
      <Head>
        <title>Jacquelin Velasquez</title>
      </Head>
      <Header/>

      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>
    </div>
  )
}

export default Home
