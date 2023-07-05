import { Link } from 'react-router-dom'
import styles from '../styles/components/menu.module.css'
import { GithubLogo, LinkedinLogo } from 'phosphor-react'

const Menu = () => {

    return ( 
        <nav className={styles.menuContainer}>
                <li><Link className={styles.menuLink} to="/">Home</Link></li>
                <li><Link className={styles.menuLink} to="/sobre">Sobre</Link></li>
                <li><Link className={styles.menuLink} to="/portfolio">Portfólio</Link></li>
                <li><Link className={styles.menuLink} to="/contato">Contato</Link></li>

                <div className={styles.menuIconContainer}>
                    <a href="https://github.com/cyberlua" target="_blank" rel="noopener noreferrer">
                    <GithubLogo size={40} color="#ffffff" weight="thin" className={styles.menuIcon} />
                </a>
                
                    <a href="https://www.linkedin.com/in/cyberlua7/" target="_blank" rel="noopener noreferrer">
                    <LinkedinLogo size={40} color="#ffffff" weight="thin" className={styles.menuIcon} />
                </a>
                </div>
        </nav>
     );
}
 
export default Menu;