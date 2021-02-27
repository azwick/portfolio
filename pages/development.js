import About from "../components/About"
import Head from 'next/head'
import Image from "next/image";
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
                        <a target="_blank" href="https://dashboardz.vercel.app/"><Image width={900} height={600} src="/dev-dashboard.png" alt="Custome dashboard implementation with ToDo list" /></a>
                    </div>
                    <div className={styles.boxText}>
                        <b>Coming soon... </b><br/> 
                        The ONE to rule them all API <br/> 
                        <a className="link" target="_blank" href="https://github.com/azwick/lord-of-the-rings">See progress on GitHub</a>
                     </div>
                    <div className={styles.boxText}>
                        <b>Coming soon... </b><br/> 
                        Habits App <br/> 
                        <a className="link" target="_blank" href="https://github.com/azwick/habits-app">See progress on GitHub</a>
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