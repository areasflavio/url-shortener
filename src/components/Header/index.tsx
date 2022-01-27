import { GitHub } from 'iconoir-react';

import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logoImg} alt="URLshorten" />

        <a
          href="https://github.com/areasflavio/url-shortener-web"
          target="_blank"
          rel="noopener"
          aria-label="Github repo link"
        >
          <GitHub />
        </a>
      </div>
    </header>
  );
};

export { Header };
