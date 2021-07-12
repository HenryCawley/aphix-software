import BottomNavigationLink from './BottomNavigationLink'

import classes from './BottomNavigation.module.css';

function BottomNavigation() {
  return(
    <div className={classes.container}>
      <BottomNavigationLink text={'Products'}/>
      <BottomNavigationLink text={'ERP Integrations'}/>
      <BottomNavigationLink text={'My Industry'}/>
      <BottomNavigationLink text={'Our Network'}/>
      <button className={classes.RequestDemo}>Request A Demo</button>
    </div>
  );
};

export default BottomNavigation;
