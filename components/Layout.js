import Header from '../components/Header'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.page}>
            <Header />
            {children}
        </div>
    );
}
 
export default Layout;