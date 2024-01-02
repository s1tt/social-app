import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(styles.Loader, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
