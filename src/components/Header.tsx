import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import useScrollspy from '../hooks/useScrollspy';
import useTheme from '../hooks/useTheme';

const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

const Header: React.FC = () => {
  const activeId = useScrollspy(sections, 80);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>VB</div>

        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? styles.active : ''}
                onClick={() => setMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
};

export default Header;