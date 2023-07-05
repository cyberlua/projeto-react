import React from 'react';
import styles from '../styles/components/darkMode.module.css'

const DarkMode = ({ isDarkMode, toggleDarkMode }) => {
    return ( 
        <div className={styles.darkModeContainer}>
        <button className={styles.darkmode} onClick={toggleDarkMode}>
          {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
        </div>
  );
}
 
export default DarkMode;