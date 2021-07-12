import SAPImg from '../../../assets/SAPlogo.jpg';
import SAGEImg from '../../../assets/Sagelogo.jpg';
import IntactImg from '../../../assets/Intactlogo.jpg';
import HARMONiQImg from '../../../assets/HARMONiQlogo.jpg';

import classes from './IntegrationTile.module.css'

function OurSolutions(props) {
  const images = {
      SAP: SAPImg,
      Sage: SAGEImg,
      Intact:IntactImg,
      HARMONiQ:HARMONiQImg
  };

  const title = {
    SAP: 'SAP Integrations',
    Sage: 'Sage Integrations',
    Intact:'Intact Integrations',
    HARMONiQ:'HARMONiQ Integration'
  }

  const paragraph = {
    SAP: 'Aphix offers real-time integration between the Aphix Digital Platform and SAP ERP systems such as SAP S/4HANA, SAP Business One, SAP HANA, and SAP ECC.',
    Sage: 'Aphix offers real-time integration between the Aphix Digital Platform and Sage ERP systems such as Sage X3, Sage 200, and Sage 1000.',
    Intact:'Aphix offers real-time integration between the Aphix Digital Platform and Intact ERP systems such as Intact iQ, Intact Vline, and Intact Xline.',
    HARMONiQ:'Aphix offers real-time integration between the Aphix Digital Platform and other ERP systems such as a leading ERP in Australia, HARMONiQ ERP.'
  }

  return(
    <div className={classes.container}>
      <h2>{title[props.text]}</h2>
      <img src={images[props.text]} />
      <p>{paragraph[props.text]}</p>
      <button className={classes.findOutMore}>Find Out More</button>
    </div>
  );
};

export default OurSolutions;
