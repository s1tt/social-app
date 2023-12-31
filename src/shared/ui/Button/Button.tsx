import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button = ({ className, theme, children, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(styles.Button, { [styles[theme]]: true }, [
        className
      ])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
