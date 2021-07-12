import classes from './GetStartedTile.module.css'
import WholesalerImg from '../../../assets/WholesaleBox.png';
import DistributionImg from '../../../assets/DistributionBox.png';
import ManufacturerImg from '../../../assets/ManufacturingBox.png';
import RetailerImg from '../../../assets/RetailBox.png';


function GetStartedTile(props) {
  const images = {
      Wholesaler: WholesalerImg,
      Distributor: DistributionImg,
      Manufacturer: ManufacturerImg,
      Retailer:RetailerImg
  };

  return(
    <div className={classes.container}>
        <img src={images[props.text]} />
        <h3>{props.text}</h3>
    </div>
  );
};

export default GetStartedTile;
