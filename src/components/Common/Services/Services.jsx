import TopTriangle from '../../../assets/TopTriangle.svg'
import Triangle from '../../../assets/Triangle.svg'

import AphixLogo from '../../../assets/aphix.png'
import ServiceTile from './ServiceTile.jsx'
import classes from './Services.module.css'

function Services() {
  return(
    <div className={classes.servicesContainer}>
    <img src={TopTriangle} style={{top:`0%`,transform:`translateY(-100%)`}}/>
      <h1><img src={AphixLogo} className={classes.logo}/> The Aphix Digital Platform delivers...</h1>

      <div className={classes.row}>
        <ServiceTile image={'Ecommerce'} title={'eCommerce Suite'} text={'The best in eCommerce technology with the best B2B & B2C experience'}/>
        <ServiceTile image={'Eprocurement'} title={'eProcurement Suite'} text={'Procurement software that streamlines and automates your business'}/>
        <ServiceTile image={'MobileApps'} title={'Mobile App Suite'} text={'Dedicated apps for field sales, van sales, and your customers'}/>
      </div>

      <div className={classes.row}>
        <ServiceTile image={'Platform'} title={'Best-in-Class Security'} text={'Robust Security to keep your data and customer information safe'}/>
        <ServiceTile image={'Platform'} title={'Real Time ERP Integration'} text={'Full, instantaneous integration with your ERP & Stock Management systems'}/>
        <ServiceTile image={'Platform'} title={'Catalogue Management'} text={'Manage efficiently even the largest catalogues in one central place'}/>
      </div>

      <div className={classes.row}>
        <ServiceTile image={'Platform'} title={'Fast Deployment'} text={'Dedicated, real-time digital ordering system - in as little as 21 days'}/>
        <ServiceTile image={'Platform'} title={'Product Roadmap'} text={'Stay ahead of the competition with new features released every month'}/>
        <ServiceTile image={'Platform'} title={'Fully Supported Platform'} text={'Industry-leading support from our in-house Customer Success team'}/>
      </div>
      <img src={Triangle} style={{bottom:`0%`,transform:`translateY(100%)`}} />
    </div>
  );
};

export default Services;
