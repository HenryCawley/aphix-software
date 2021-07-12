import classes from './Banner.module.css';

function Banner() {
  return(
    <div className={classes.container}>
      <div className={classes.bannerText}>
        <h2>The Digital Platform for Integrated eCommerce</h2>
        <span>We provide eCommerce, eProcurement and Mobile App Solutions that fully integrate with your ERP.</span>
      </div>
    </div>
  );
};

export default Banner;
