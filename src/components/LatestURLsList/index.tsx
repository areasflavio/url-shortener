import { Copy } from 'iconoir-react';

import styles from './styles.module.scss';

const LatestURLsList: React.FC = () => {
  return (
    <section className={styles.latest_urls} aria-label="Latest URLs">
      <h2>Latest URLs</h2>

      <div>
        <span>Origin URL</span>
        <ul>
          <li>
            <a href="#">
              https://github.com/areasflavio/areasflavio/areasflavio/areasflavio/areasflavio
            </a>
          </li>
          <li>
            <a href="#">
              https://github.com/areasflavio/areasflavio/areasflavio/areasflavio
            </a>
          </li>
          <li>
            <a href="#">https://github.com/areasflavio</a>
          </li>
          <li>
            <a href="#">
              https://github.com/areasflavio/areasflavio/areasflavio/areasflavio
            </a>
          </li>
          <li>
            <a href="#">https://github.com/areasflavio</a>
          </li>
        </ul>

        <span>Short URL</span>
        <ul>
          <li>
            <a href="#">https://urlshorten.com/anF1MoC8H</a>
            <Copy />
          </li>
          <li>
            <a href="#">https://urlshorten.com/anF1MoC8H</a>
            <Copy />
          </li>
          <li>
            <a href="#">https://urlshorten.com/anF1MoC8H</a>
            <Copy />
          </li>
          <li>
            <a href="#">https://urlshorten.com/anF1MoC8H</a>
            <Copy />
          </li>
          <li>
            <a href="#">https://urlshorten.com/anF1MoC8H</a>
            <Copy />
          </li>
        </ul>
      </div>
    </section>
  );
};

export { LatestURLsList };
