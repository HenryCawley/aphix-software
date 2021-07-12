import NikeLogo from '../../../assets/NikeLogo.png'
import KlipspringerLogo from '../../../assets/KlipspringerLogo.png'
import QTPLogo from '../../../assets/QTPLogo.png'
import DemesneLogo from '../../../assets/DemesneLogo.png'
import AmadysLogo from '../../../assets/AmadysLogo.jpg'
import FAILogo from '../../../assets/FAILogo.png'
import FSLogo from '../../../assets/FSLogo.png'
import UmbroLogo from '../../../assets/UmbroLogo.png'

import classes from './Clients.module.css'

function Clients() {
  return(
    <div className={classes.container}>
      <h2>Some of Our Clients</h2>
      <h3>We have clients from all over the world, of different sizes, different industries, and most importantly, with different needs.</h3>
        <div className={classes.brandContainer}>
            <img src={NikeLogo} style={{width:`148px`,height:`74px`}}/>
            <img src={KlipspringerLogo} style={{width:`148px`,height:`38.19px`}}/>
            <img src={QTPLogo} style={{width:`77px`,height:`72px`}}/>
            <img src={DemesneLogo} style={{width:`148px`,height:`67px`}}/>
        </div>
        <div className={classes.brandContainer}>
            <img src={AmadysLogo} style={{width:`148px`,height:`65.77px`}}/>
            <img src={FAILogo} style={{width:`148px`,height:`148px`}}/>
            <img src={FSLogo} style={{width:`88px`,height:`74px`}}/>
            <img src={UmbroLogo} style={{width:`148px`,height:`99px`}}/>
        </div>
      <h3>Find Out How We Have Helped Our Customers</h3>
    </div>
  );
};

export default Clients;
