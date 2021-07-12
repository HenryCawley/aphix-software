import AphixIcon from '../../../assets/AphixUsers.png'
import PartnerIcon from '../../../assets/PartnerIcon.png'
import IntegrationsIcon from '../../../assets/Integrations.png'

import classes from './StatisticsTile.module.css'

function StatisticsTile(props) {
  const images = {
      Users: AphixIcon,
      Partners: PartnerIcon,
      Integrations:IntegrationsIcon,
  };

  const buttonColor = {
    Users: `#D4026E`,
    Partners: `#91569E`,
    Integrations:`#1080c4`
  }
  return(
    <div className={classes.container}>
      <div className={classes.circle} style={{backgroundColor:buttonColor[props.image]}}>
        <img src={images[props.image]} />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.subHeading}</p>
    </div>
  );
};

export default StatisticsTile;
