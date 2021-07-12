import GetStartedTile from './GetStartedTile.jsx'

import classes from './GetStarted.module.css'

function GetStarted() {
  return(
    <div className={classes.container}>
      <h2> Get Started with your eCommerce Journey</h2>
      <h2> by Clicking Blow</h2>
      <h3>I am a...</h3>
      <div className={classes.tiles}>
        <GetStartedTile text={'Wholesaler'}/>
        <GetStartedTile text={'Distributor'}/>
        <GetStartedTile text={'Manufacturer'}/>
        <GetStartedTile text={'Retailer'}/>
      </div>
    </div>
  );
};

export default GetStarted;
