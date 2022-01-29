import { useState } from 'react';
import { Link, Lock } from 'iconoir-react';

import { Input } from '../Input';

import styles from './styles.module.scss';
import { api } from '../../services/api';

const API_URL = import.meta.env.VITE_API_URL as string;

interface ULR {
  _id: string;
  hash: string;
  originURL: string;
  shortURL: string;
  createdAt: Date;
}

const InputsArea: React.FC = () => {
  const [urlData, setUrlData] = useState<ULR | null>(null);

  function handleShorten(shortenURL: string) {
    console.log({ shortenURL });
  }

  async function handleRecover(hash: string) {
    window.open(`${API_URL}/${hash}`, '_blank');
  }

  return (
    <section className={styles.inputs_area} aria-label="Inputs area">
      <Input
        buttonIcon={<Link />}
        buttonText="shorten"
        placeholder="Write or paste the origin URL to be shorten"
        onButtonPress={handleShorten}
      />

      <span>OR</span>

      <Input
        buttonIcon={<Lock />}
        buttonText="recover"
        placeholder="Write or paste the hash to recover the origin URL"
        onButtonPress={handleRecover}
      />
    </section>
  );
};

export { InputsArea };
