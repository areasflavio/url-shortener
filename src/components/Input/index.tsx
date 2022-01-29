import { ReactNode, useState } from 'react';
import { Cancel } from 'iconoir-react';

import styles from './styles.module.scss';

interface InputProps {
  placeholder: string;
  buttonText: string;
  buttonIcon: ReactNode;
  onButtonPress: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  buttonIcon,
  buttonText,
  onButtonPress,
}) => {
  const [inputValue, setInputValue] = useState('');

  function handleCleanInput() {
    setInputValue('');
  }

  function handleButtonPress() {
    onButtonPress(inputValue);

    handleCleanInput();
  }

  return (
    <div className={styles.input}>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <span onClick={handleCleanInput}>
          <Cancel />
        </span>
      </div>

      <button onClick={handleButtonPress}>
        {buttonIcon}
        <strong>{buttonText}</strong>
      </button>
    </div>
  );
};

export { Input };
