import ECommerceImg from '../../../assets/eCommerceLogo.jpg';
import EProcurementImg from '../../../assets/eProcurementLogo.png';
import MobileAppsImg from '../../../assets/MobileAppsLogo.png';

import classes from './OurSolutionsTile.module.css'

function OurSolutions(props) {
  const images = {
      eCommerce: ECommerceImg,
      eProcurement: EProcurementImg,
      Mobile:MobileAppsImg
  };

  const eCommerce = [
    {item:'Real-Time Integration with your ERP'},
    {item:'Your Own Branded WebShop'},
    {item:'Mobile-Responsive Solutions'},
    {item:'Tried and Tested Implementation'},
    {item:'Real-Time Stock & Pricing'},
    {item:'24/7, 365 Customer Self-Service'},
    {item:'Built-In Marketing Tools'},
    {item:'and more...'},
  ]

  const eProcurement = [
    {item:'Real-Time Integration with your ERP'},
    {item:'Your Own Supplier System'},
    {item:'Mobile-Friendly Solutions'},
    {item:'Streamlines your Business'},
    {item:'Automates your Procurement Process'},
    {item:'Real-Time Information from your ERP'},
    {item:'Industry-Leading Support'},
    {item:'and more...'},
  ]

  const mobile = [
    {item:'Real-Time Integration with your ERP'},
    {item:'Apps for Sales Reps & Customers'},
    {item:'Easy & Quick to Deploy'},
    {item:'Built for iOS and Android'},
    {item:'Real-Time Information from your ERP'},
    {item:'Works Anywhere, even Offline'},
    {item:'Industry-Leading Support'},
    {item:'and more...'},
  ]

  const buttonColor = {
    eCommerce: `#D4026E`,
    eProcurement: `#91569E`,
    Mobile:`#1080C4`
  };

  if (props.text === 'eCommerce') {
    return(
      <div className={classes.container}>
        <img src={images[props.text]} />
        <h2>{props.title}</h2>
        <ul>
          {eCommerce.map((user)=><li>{user.item}</li>)}
        </ul>
        <button className={classes.learnMore} style={{backgroundColor:buttonColor[props.text]}}>Learn More</button>
      </div>
    );
  };

  if (props.text === 'eProcurement') {
    return(
      <div className={classes.container}>
        <img src={images[props.text]} />
        <h2>{props.title}</h2>
        <ul>
          {eProcurement.map((user)=><li>{user.item}</li>)}
        </ul>
        <button className={classes.learnMore} style={{backgroundColor:buttonColor[props.text]}}>Learn More</button>
      </div>
    );
  };

  if (props.text === 'Mobile') {
    return(
      <div className={classes.container}>
        <img src={images[props.text]} />
        <h2>{props.title}</h2>
        <ul>
          {mobile.map((user)=><li>{user.item}</li>)}
        </ul>
        <button className={classes.learnMore} style={{backgroundColor:buttonColor[props.text]}}>Learn More</button>
      </div>
    );
  };
};

export default OurSolutions;
