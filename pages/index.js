import Head from 'next/head'
import Image from "next/image";
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
            <a className={styles.introLeft}>
              <Image width={300} height={600} src="/intro-dev.png" alt="Development" />
            </a>
          </Link>
  
          <Link href="/design">
            <a className={styles.introRight}>
              <Image width={300} height={600} src="/intro-design.png" alt="Design" />
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
