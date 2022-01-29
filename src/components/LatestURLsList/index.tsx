import { useEffect, useState } from 'react';
import { Copy } from 'iconoir-react';

import { api } from '../../services/api';

import styles from './styles.module.scss';

interface ULR {
  _id: string;
  hash: string;
  originURL: string;
  shortURL: string;
}

const LatestURLsList: React.FC = () => {
  const [urls, setUrls] = useState<ULR[]>([]);

  useEffect(() => {
    async function getLatestURLs() {
      const response = await api.get('/latestURLs');
      setUrls(response.data);
    }

    getLatestURLs();
  }, []);

  return (
    <section className={styles.latest_urls} aria-label="Latest URLs">
      <h2>Latest URLs</h2>

      <div>
        <span>Origin URL</span>
        <ul>
          {urls.map((url) => (
            <li key={url._id}>
              <p>{url.originURL}</p>
            </li>
          ))}
        </ul>

        <span>Short URL</span>
        <ul>
          {urls.map((url) => (
            <li key={url._id}>
              <p>{`http://urlshorten.com/${url.hash}`}</p>

              <Copy className="copy" data-clipboard-text={url.shortURL} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { LatestURLsList };
