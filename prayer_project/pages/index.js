import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from '../components/Header';
import Individuals from '../components/Individuals';
const inter = Inter({ subsets: ['latin'] })

export default function Home()  {

  return (
    <>
      <Head>
        <title>Prayer Project</title>
        <meta name="description" content="Family Prayer Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.content}>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={inter.className}>
              Prayer Project
            </h1>
            <h2 className={inter.className}>
              Instructions
            </h2>
            <ol className={inter.className}>
              <li> Enter your group code on the top right corner to find your prayer group </li>
              <li> Click on the SIGN UP button below to fill out the form. This allows you to be partnered with a prayer partner for the upcoming month.</li>
              <li> Once a new month starts, scroll through this page to find your prayer partner. </li>
              <li> Click on the your partner's box to see their praise items and prayer requests. </li>
              <li> Communicate how you want to pray with your partner. For example, meeting in person, organizing a call, praying on your own time, etc.</li>
            </ol>
          </a>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={inter.className}>
              <Link href="/signup">
                SIGN UP
              </Link>

            </button>
          </a>
          <Individuals/>
        </div>
      </main>
    </>
  )
}
