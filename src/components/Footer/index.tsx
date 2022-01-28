import { GitHub, LinkedIn } from 'iconoir-react';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer_bg}>
      <div className={styles.footer}>
        <strong>Made by Flávio Arêas</strong>

        <div>
          <a
            href="https://github.com/areasflavio"
            target="_blank"
            rel="noopener"
            aria-label="Github link"
          >
            <GitHub />
          </a>
          <a
            href="https://linkedin.com/in/areasflavio"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn link"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
