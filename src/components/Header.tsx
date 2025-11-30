import React from 'react';
import { useTheme } from '../hooks/useTheme';
import styles from '../styles/Header.module.css';

const SECTIONS = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Vinnie Baker</div>
        <ul className={styles.navList}>
          {SECTIONS.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={styles.navLink}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
};

export default Header;