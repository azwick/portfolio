import Footer from '../components/Footer';
import Header from '../components/Header'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.page}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
 
export default Layout;