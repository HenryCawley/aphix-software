import OurSolutionsTile from './OurSolutionsTile.jsx'

import classes from './OurSolutions.module.css'

function OurSolutions() {

  return(
    <div className={classes.container}>
    <h2>Our ERP Integrated Solutions</h2>
    <p>The Aphix Digital Platform is a one-stop place with multiple digital ordering solutions that cover the full 360° ordering of your business operations.</p>
    <div className={classes.tile}>
      <OurSolutionsTile text={'eCommerce'} title={'eCommerce Suite'} />
      <OurSolutionsTile text={'eProcurement'} title={'eProcurement Suite'}/>
      <OurSolutionsTile text={'Mobile'} title={'Mobile App Suite'}/>
    </div>

    </div>
  );
};

export default OurSolutions;
