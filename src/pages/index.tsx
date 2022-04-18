import Head from 'next/head'
import Image from 'next/image'
import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Projects } from '../components/Projects'
import { Technologies } from '../components/Technologies'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EzequielCode - Portfólio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Technologies />
      </main>
      <Footer />
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}