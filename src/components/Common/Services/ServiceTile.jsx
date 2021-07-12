import EcommerceIcon from '../../../assets/ecommerceIcon2.png'
import EprocurementIcon from '../../../assets/eprocurementIcon2.png'
import MobileAppsIcon from '../../../assets/mobileAppsIcon_2.png'
import PlatformIcon from '../../../assets/platformIcon2.png'

import classes from './ServiceTile.module.css'

function ServiceTile(props) {
  const images = {
      Ecommerce: EcommerceIcon,
      Eprocurement: EprocurementIcon,
      MobileApps:MobileAppsIcon,
      Platform:PlatformIcon
  };

  return(
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img src={images[props.image]} />
        </div>

        <div className={classes.textContainer}>
          <h2>{props.title}</h2>
          <span>{props.text}</span>
        </div>
      </div>
  );
};

export default ServiceTile;
