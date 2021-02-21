import Head from 'next/head'
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
                        <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 107.11 137.98"><path d="M31.59,64s4.81.83,5-6.07.21-22.38-6.69-33S13.52,11.68,20.3,7.7c6-3.52,18.82-7.11,34.93-5.43S74.05,7.7,89.11,7.7c12.56,0,24.83-1,30.06-4.36s7.74-.2,4.4,2.93-23.38,7.92-33.83,27.37-28,51-27.4,70.69,8.15,23.22,19.87,19.87,11.29-17.36,11.92-23.63,3.32-26.63,7.74-32.63c2.92-4,8.36-6.69,12.54-2.93s4.4,8.58,0,8.79-2.71-6.07-2.71-6.07-4.22,2.6-5.26,5.94-6,22.65-.18,36.94c9.38,23.19,21,25.11-3.14,28.23-17.78,2.3-24.87-2.56-36.6-6.27-13.2-4.19-25.1-4.6-31.79,1.46-14.27,12.94-15.27,2.3-2.51-13.18S57.74,76.12,65.89,51.21c9.42-28.77,4.81-36.39-4.81-39.95S44.71,12.31,44.3,21.09s1.93,33.25-2.88,40-9.83,10-15.27,3.55,0-9,1.89-9,4,1.46,4.18,3.35A18,18,0,0,1,31.59,64Z" transform="translate(-17.97 -1.84)"/></svg>
                    </a></Link></div>
                <nav className={styles.navbar}>
                    <ul className={styles.list}>
                        <li className={styles.item}><Link href="/development"><a className={router.pathname == "/development" ? "active" : ""}>Development</a></Link></li>
                        <li className={styles.item}><Link href="/design"><a className={router.pathname == "/design" ? "active" : ""}>Design</a></Link></li>
                    </ul>
                </nav>
            </header>
        </>
     );
}
//  className={router.pathname == "/development" ? styles.active : styles.item}
export default Header;