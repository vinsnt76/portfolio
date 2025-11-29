// src/components/Header/index.tsx
import { useScrollspy } from '../../hooks/useScrollspy';
import { useTheme } from '../../hooks/useTheme';
import styles from './Header.module.css';

const SECTIONS = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

const Header = () => {
  const activeSection = useScrollspy(SECTIONS);
  const { toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Vinnie Baker</div>
        <ul className={styles.navList}>
          {SECTIONS.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`${styles.navLink} ${activeSection === section ? styles.navLinkActive : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
          ☀️/🌙
        </button>
      </nav>
    </header>
  );
};

export default Header;