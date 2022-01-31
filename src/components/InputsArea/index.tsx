import { useState } from "react";
import { Cancel, Copy, Link, Lock, OpenInBrowser } from "iconoir-react";

import { Input } from "../Input";

import styles from "./styles.module.scss";
import { api } from "../../services/api";

const API_URL = import.meta.env.VITE_API_URL as string;

type ULRData = {
  _id: string;
  hash: string;
  originURL: string;
  shortURL: string;
  createdAt: string;
};

interface FormattedURL extends ULRData {
  formattedCreatedAt: Date;
}

const InputsArea: React.FC = () => {
  const [urlData, setUrlData] = useState<FormattedURL | null>(null);

  async function handleShorten(originURL: string) {
    const response = await api.post("/shortener", { originURL });

    const formattedURLData = {
      ...response.data,
      formattedCreatedAt: new Date(response.data.createdAt).toLocaleDateString(
        "en-US"
      ),
    };

    setUrlData(formattedURLData);
  }

  async function handleRecover(hash: string) {
    window.open(`${API_URL}/${hash}`, "_blank");
  }

  async function handleOpenURL(url: string) {
    window.open(`${url}`, "_blank");
  }

  return (
    <section className={styles.inputs_area} aria-label="Inputs area">
      <Input
        buttonIcon={<Link />}
        buttonText="shorten"
        placeholder="Write or paste the origin URL to be shorten"
        onButtonPress={handleShorten}
      />

      {urlData && (
        <div className={`${styles.url_data} ${styles.animate}`}>
          <Cancel onClick={() => setUrlData(null)} />

          <ul>
            <li>
              <strong>Short URL:</strong>
              <p>{`http://urlshorten.com/${urlData.hash}`}</p>
              <Copy className="copy" data-clipboard-text={urlData.shortURL} />
            </li>
            <li>
              <strong>Origin URL:</strong>
              <p>{urlData.originURL}</p>
              <OpenInBrowser onClick={() => handleOpenURL(urlData.originURL)} />
            </li>
          </ul>
          <ul>
            <li>
              <strong>Created date:</strong>
              <p>{urlData.formattedCreatedAt}</p>
            </li>
            <li>
              <strong>Hash:</strong>
              <p>{urlData.hash}</p>
            </li>
          </ul>
        </div>
      )}

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
