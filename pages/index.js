import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zwickermann</title>
            <meta name="keywords" content="Front-end Design, Design, Frontend-Development, Development, Developer, Anne Debora Zimmermann-Zwick" />
      </Head>

      <main className={styles.main}>
          <h1 className={styles.intro}>
            Moin, I'm Anne. <br/>
            Welcome to my playground <br/> 
            of <b className={styles.marked}>creativity</b> and <br/> 
            public <b className={styles.marked}>learning</b>.
          </h1>
      </main>
    </>
  )
}
