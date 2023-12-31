import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

function NavBar({ className }: NavBarProps) {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to='/'
          className={styles.mainLink}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          About
        </AppLink>
      </div>
    </div>
  );
}

export default NavBar;
