import Head from 'next/head'
import styles from '../styles/Development.module.css'

const Music = () => {

    return (
        <>
            <Head>
                <title>Zwickermann | Music</title>
                <meta name="keywords" content="Music" />
                <meta name="description" content="Work in progress"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.heading}>
                    <h1 className="headline01">Music</h1>
                    <blockquote className={styles.quote}>
                        "Music is the strongest form of magic." <br/>
                        <span className={styles.author}>Marilyn Manson</span>
                    </blockquote>
                </div>
            </main>
        </>
     );
}
export default Music;