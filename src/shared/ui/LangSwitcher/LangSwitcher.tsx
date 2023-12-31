import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from '../Button/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(styles.Button, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};

export default LangSwitcher;
