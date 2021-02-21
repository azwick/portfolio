import About from "../components/About"
import Head from 'next/head'
import styles from '../styles/Development.module.css'

const Development = () => {
    return ( 
        <>
            <Head>
                <title>Zwickermann | Development</title>
                <meta name="keywords" content="Frontend Design, Development" />
                <meta name="description" content="Latest dev projects on zwickermann."/>
            </Head>

            <main className={styles.main}>

                {/* <div className={styles.heading}>
                    <h1 className="headline01">Development</h1>
                    <blockquote className={styles.quote}>
                        "I have never tried that before, so I think I should definitely be able to do that." <i className={styles.author}>- Pippi Longstocking</i>
                    </blockquote>
                </div> */}

                <div className={styles.content}>
                    <div className={styles.box}>
                        <b>Coming soon... </b><br/> 
                        The ONE to rule them all API <br/> 
                        <a className="link" target="_blank" href="https://github.com/azwick/lord-of-the-rings">See on GitHub</a>
                     </div>
                    <div className={styles.box}>
                        <b>Coming soon... </b><br/> 
                        Dashboard playground <br/> 
                        <a className="link" target="_blank" href="https://github.com/azwick/playground/tree/master/dashboard">See on GitHub</a>
                    </div>
                    <div className={styles.box}>
                        <b>Coming soon... </b><br/> 
                        Habits App <br/> 
                        <a className="link" target="_blank" href="https://github.com/azwick/habits-app">See on GitHub</a>
                    </div>
                    {/* <div className={styles.box}>Coming soon... <br/> Jokes API Playground</div>
                    <div className={styles.box}>Coming soon... <br/> Memory game</div>
                    <div className={styles.box}>Coming soon... <br/> RecipeShare</div> */}
                </div>
            </main>
            <About />
        </>
    );
}

export default Development;