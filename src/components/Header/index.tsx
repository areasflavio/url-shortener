import { GitHub } from 'iconoir-react';

import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header_bg}>
      <div className={styles.header}>
        <img src={logoImg} alt="URLshorten" width="179" height="35" />

        <a
          href="https://github.com/areasflavio/url-shortener-web"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github repo link"
        >
          <GitHub />
        </a>
      </div>
    </header>
  );
};

export { Header };
