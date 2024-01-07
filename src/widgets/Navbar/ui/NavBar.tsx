import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

function NavBar({ className }: NavBarProps) {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={styles.links}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        reprehenderit iste iusto quidem accusamus consectetur nisi sit at
        quisquam illo?
      </Modal>
    </div>
  );
}

export default NavBar;
