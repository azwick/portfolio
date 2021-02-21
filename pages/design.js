import About from "../components/About"
import Head from 'next/head'
import Image from "next/image";
import styles from '../styles/Design.module.css'

const Design = () => {
    return (
        <>
            <Head>
                <title>Zwickermann | Design</title>
                <meta name="keywords" content="Frontend Design, Design" />
                <meta name="description" content="Latest design references on zwickermann."/>
            </Head>

            <main className={styles.main}>

                {/* <div className={styles.heading}>
                    <h1 className="headline01">Design</h1>
                    <blockquote className={styles.quote}>
                        "Every great design begins with an even better story." <i className={styles.author}>- Lorinda Mamo</i>
                    </blockquote>
                </div> */}

                <div className={styles.content}>
                    {/* Filter: (Alles) | Logo | Illustration | Corporate Design | Sonstiges */}

                    <div className={styles.box}>
                        <Image width={900} height={600} src="/goldherzkolibri.jpg" alt="Goldherzkolibri Logo" />
                    </div>
                    <div className={styles.box}>
                        <Image width={900} height={600} src="/bianca-eventverliebt.jpg" alt="Bianca Eventverliebt Logo" />
                    </div>
                    <div className={styles.box}>
                        <Image width={900} height={600} src="/erziehungsfreude.jpg" alt="Erziehungsfreude Logo" />
                    </div>
                    <div className={styles.box}>
                        <Image width={900} height={600} src="/verein-zur-foerderung-krebskranker-kinder.jpg" alt="Verein zur Förderung krebskranker Kinder Rostock e.V. Logo" />
                    </div>
                    <div className={styles.box}>
                        <Image width={900} height={600} src="/liwell-akademie.jpg" alt="Liwell Akademie Logo" />
                    </div>
                    <div className={styles.box}>
                        <Image width={900} height={600} src="/waldemar-schneider.jpg" alt="Waldemar Schneider Logo" />
                    </div>
                    <div className={styles.box}>
                        <Image width={900} height={600} src="/crimson-team.jpg" alt="Crimson Team Logo" />
                    </div>
                    <div className={styles.box}>
                        <Image width={900} height={600} src="/epagesdevs-join-the-force.jpg" alt="ePages devs join the force - Yoda Sticker" />
                    </div>
                    <div className={styles.box}>
                        <Image width={900} height={600} src="/tauchstempel-peter.jpg" alt="Tauchstempel von Peter" />
                    </div>
                    {/* <div className={styles.box}>Coming soon: <br/> Tauchstempel von Anne (Sonstiges)</div> */}
                    {/* <div className={styles.box}>FA - Save The Date (Corporate Design)</div>
                    <div className={styles.box}>AP - Save The Date (Corporate Design)</div>
                    <div className={styles.box}>AP - Dankeskarte (Corporate Design)</div>
                    <div className={styles.box}>AP - Einladung (Corporate Design)</div>
                    <div className={styles.box}>2x Dev Blog Infografik (Sonstiges)</div>
                    <div className={styles.box}>Coming soon: <br/> Lady Spring (Illu)</div>
                    <div className={styles.box}>Coming soon: <br/> Lady Summer (Illu)</div>
                    <div className={styles.box}>Coming soon: <br/> Lady Winter (Illu)</div>
                    <div className={styles.box}>Coming soon: <br/> Lady Autumn (Illu)</div> */}
                </div>
            </main>
            <About />
        </>
     );
}
 
export default Design;