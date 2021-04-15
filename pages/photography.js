import Head from 'next/head'
import styles from '../styles/Development.module.css'

const Photography = () => {

    return (
        <>
            <Head>
                <title>Zwickermann | Photography</title>
                <meta name="keywords" content="Photography" />
                <meta name="description" content="Work in progress"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.heading}>
                    <h1 className="headline01">Photography</h1>
                    <blockquote className={styles.quote}>
                        "Some people feel the rain. Others just get wet." <br/>
                        <span className={styles.author}>Bob Marley</span>
                    </blockquote>
                </div>
            </main>
        </>
     );
}
export default Photography;