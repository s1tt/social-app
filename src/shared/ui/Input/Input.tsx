import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...props
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
      if (e.target instanceof HTMLInputElement) {
        setCaretPosition(e?.target?.selectionStart || 0);
      }
    };

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        ref.current.focus();
      }
    }, [autoFocus]);

    return (
      <div className={classNames(styles.InputWrapper, {}, [className])}>
        {placeholder && (
          <div className={styles.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={styles.caretWrapper}>
          <input
            ref={ref}
            className={styles.input}
            type={type}
            name=''
            id=''
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlur}
            onFocus={onFocus}
            onSelect={onSelect}
            {...props}
          />
          {isFocused && (
            <span
              className={styles.caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Input;
