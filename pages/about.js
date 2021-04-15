import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <>
            <Head>
                <title>Zwickermann | About</title>
                <meta name="keywords" content="Front-end Design, Design, Frontend-Development, Development, Developer, Anne Debora Zimmermann-Zwick" />
                <meta name="description" content="Anne Debora Zimmermann-Zwick at Zwickermann.com"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.container}>
                    <div>
                        <Image width={400} height={400} src="/anne-debora-zimmermann-zwick.jpg" alt="Anne Debora Zimmermann-Zwick" />
                    </div>
                    <div>
                        <h2>Moin. I'm Anne.</h2>
                        <p>I have been working as a designer for over 8 years. Since last year I decided to take a new step in my life and continue my education as a frontend developer. I am curious where my path will lead me and what projects I'll be working on in the future.</p>
                        <p>I don’t want to live a normal and boring existence. So I try to remember myself every single day to live the life that I want to. But next to my desire to always reinvent myself, I'm a normal dude trying to leave my footprints in this world...</p>
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default About;