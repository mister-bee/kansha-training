import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kansha Training!!!</title>
        <meta name="description" content="kansha training" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          How to use <a href="https://kansha.app">Kansha!!</a>
        </h1>
        <Navbar />
        <p className={styles.description}>
          Gratitude is the Currrency of Learning{' '}
        </p>

        <h3>Students - Teacher - Administrators</h3>

        <div>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />{" "}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
