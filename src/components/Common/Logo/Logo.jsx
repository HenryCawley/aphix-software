import AphixLogo from '../../../assets/aphix.png'

import classes from './Logo.module.css'

function Logo() {
  return(
    <div className={classes.container}>
    <img src={AphixLogo} className={classes.logo}/>
    <span className={classes.logoText}>The Digital Platfrom for ERP Integration</span>
    </div>
  );
};

export default Logo;
