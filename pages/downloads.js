import Head from 'next/head'
import styles from '../styles/Development.module.css'

const Downloads = () => {

    return (
        <>
            <Head>
                <title>Zwickermann | Downloads</title>
                <meta name="keywords" content="Downloads" />
                <meta name="description" content="Work in progress"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.heading}>
                    <h1 className="headline01">Downloads</h1>
                    <blockquote className={styles.quote}>
                        "Creativity is a drug I cannot live without." <br/>
                        <span className={styles.author}>Cecil B. DeMille</span>
                    </blockquote>
                </div>
            </main>
        </>
     );
}
export default Downloads;