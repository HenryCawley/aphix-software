import TopNavigationLink from './TopNavigationLink'

import classes from './TopNavigation.module.css';

function TopNavigation() {
  return(
    <div className={classes.container}>
      <TopNavigationLink text={'About Us'}/>
      <TopNavigationLink text={'Contact'}/>
      <TopNavigationLink text={'Events'}/>
      <TopNavigationLink text={'News'}/>
      <TopNavigationLink text={'Blog'}/>
      <TopNavigationLink text={'Careers'}/>
      <TopNavigationLink text={'Support'}/>
    </div>
  );
};

export default TopNavigation;
