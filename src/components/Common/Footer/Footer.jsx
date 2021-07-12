import Triangle from '../../../assets/Triangle.svg'

import classes from './Footer.module.css'

function Footer() {
  return(
    <div className={classes.container}>
      <div className={classes.footerNavigation}>
        <div className={classes.footerColumn}>
          <h2>Ireland</h2>
          <span>Aphix Software Limited</span>
          <span>Boyne Tower</span>
          <span>Bull Ring</span>
          <span>Drogheda</span>
          <span>A92 F682</span>
          <span>Ireland</span>

          <span style={{marginTop:`20px`}}>Call: +353412137222</span>
          <span>sales@aphixsoftware.com</span>
        </div>

        <div className={classes.footerColumn}>
          <h2>United Kingdom</h2>
          <span>Aphix Software Limited</span>
          <span>Kemp House</span>
          <span>152-160 City Road</span>
          <span>London</span>
          <span>EC1V 2NX</span>
          <span>United Kingdom</span>

          <span style={{marginTop:`20px`}}>Call: +441908464220</span>
          <span>sales@aphixsoftware.com</span>
        </div>

        <div className={classes.footerColumn}>
          <h2>Company</h2>
          <span>About Us</span>
          <span>Blog</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Terms & Conditions</span>
          <span>Sign in to our Support Desk</span>
        </div>

        <div className={classes.footerColumn}>
          <h2>Compare Aphix</h2>
          <span>Aphix vs Magento</span>
          <span>Aphix vs Shopify</span>
          <span>Aphix vs SAP Commerce Cloud</span>
          <span>Aphix vs nonCommerce</span>
          <span>Aphix vs Netalogue</span>
          <span>Aphix vs Salesforce Commerce Cloud</span>
          <span>Aphix vs WooCommerce</span>
          <span>Aphix vs k-eCommerce</span>
        </div>
      </div>
      <img src={Triangle} />
    </div>
  );
};

export default Footer;
