import { Link, Lock } from 'iconoir-react';

import { Header } from './components/Header';
import { Input } from './components/Input';

import './styles/global.scss';
import styles from './App.module.scss';

function App() {
  function handleShorten(shortenURL: string) {
    console.log({ shortenURL });
  }

  function handleRecover(originURL: string) {
    console.log({ originURL });
  }

  return (
    <>
      <Header />

      <main className={styles.main_bg}>
        <div className={styles.main}>
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
        </div>
      </main>
    </>
  );
}

export default App;
