import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zwickermann</title>
        <meta name="keywords" content="Development, Developer, Frontend Development, Design" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <Link href="/development">
            <a className={styles.introLeft}></a>
          </Link>

          <Link href="/design">
            <a className={styles.introRight}></a>
          </Link>
        </div>
      </main>
    </>
  )
}
