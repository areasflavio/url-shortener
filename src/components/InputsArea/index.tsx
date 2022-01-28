import { Link, Lock } from 'iconoir-react';

import { Input } from '../Input';

import styles from './styles.module.scss';

const InputsArea: React.FC = () => {
  function handleShorten(shortenURL: string) {
    console.log({ shortenURL });
  }

  function handleRecover(originURL: string) {
    console.log({ originURL });
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
