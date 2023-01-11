import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from '../components/Header';
import Partners from '../components/Partners';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Prayer Project</title>
        <meta name="description" content="Family Prayer Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* This section here is currently the website header*/}
        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
              <p>Joseph Nicolas </p>
            </a>
          </div>
        </div> */}
        {/* <Header/> */}
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.singleColumn}>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
              <li> Click on the SIGN UP button below to fill out the form. This allows you to be partnered with a prayer partner for the upcoming month.</li>
              <li> Once the new month starts you will receive an email about who your prayer partner is and their 3 prayer requests.</li>
              <li> Communicate how you want to pray with your partner. For example, meeting in person, organizing a call, praying on your own time, etc.</li>
            </ol>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
          {/*Eventually the table values will come from a database that is created in the backend*/}
          {/*Partners currently takes information from a fake backend database and puts it into a table */}
          <Partners/>
        </div>
      </main>
    </>
  )
}
