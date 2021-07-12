import Logo from '../Logo/Logo.jsx';
import TopNavigation from './TopNavigation.jsx';
import BottomNavigation from './BottomNavigation.jsx';

import classes from './HeaderNavigation.module.css';

function HeaderNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <div className={classes.navigation}>
          <TopNavigation />
          <BottomNavigation/>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;
