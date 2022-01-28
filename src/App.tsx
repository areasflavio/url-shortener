import { Header } from './components/Header';
import { InputsArea } from './components/InputsArea';
import { LatestURLsList } from './components/LatestURLsList';

import './styles/global.scss';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />

      <main className={styles.main_bg}>
        <div className={styles.main}>
          <InputsArea />

          <LatestURLsList />
        </div>
      </main>
    </>
  );
}

export default App;
