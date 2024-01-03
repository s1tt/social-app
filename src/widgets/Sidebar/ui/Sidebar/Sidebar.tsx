import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(state => !state);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className
      ])}
    >
      <button data-testid='sidebar-toggle' type='button' onClick={onToggle}>
        {t('toggle')}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
}

export default Sidebar;
