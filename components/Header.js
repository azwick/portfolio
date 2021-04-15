import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/"><a>
                        <Image width={320} height={320} src="/anne-debora-zimmermann-zwick.jpg" alt="Anne Debora Zimmermann-Zwick" />
                    </a></Link></div>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><Link href="/"><a className={router.pathname == "/" ? styles.active : null}>Home</a></Link></li>
                        {/* <li className={styles.navItem}><Link href="/about"><a className={router.pathname == "/about" ? styles.active : null}>About</a></Link></li> */}
                        <li className={styles.navItem}><Link href="/development"><a className={router.pathname == "/development" ? styles.active : null}>Development</a></Link></li>
                        <li className={styles.navItem}><Link href="/design"><a className={router.pathname == "/design" ? styles.active : null}>Design</a></Link></li>
                        {/* <li className={styles.navItem}><Link href="/photography"><a className={router.pathname == "/photography" ? styles.active : null}>Photography</a></Link></li>
                        <li className={styles.navItem}><Link href="/music"><a className={router.pathname == "/music" ? styles.active : null}>Music</a></Link></li>
                        <li className={styles.navItem}><Link href="/downloads"><a className={router.pathname == "/downloads" ? styles.active : null}>Downloads</a></Link></li> */}
                    </ul>
                </nav>
            </header>
        </>
     );
}
//  className={router.pathname == "/development" ? styles.active : styles.item}
export default Header;