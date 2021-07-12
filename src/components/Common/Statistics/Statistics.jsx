import StatisticsTile from './StatisticsTile.jsx'

import classes from './Statistics.module.css'

function Statistics() {
  return(
    <div className={classes.container}>
      <StatisticsTile image={'Users'} heading={'7,174,659 Users'} subHeading={'and counting'}/>
      <StatisticsTile image={'Partners'} heading={'20+ Partners'} subHeading={'in 7 countries'}/>
      <StatisticsTile image={'Integrations'} heading={'250+ Integrations'} subHeading={'using 10+ different ERP systems'}/>
    </div>
  );
};

export default Statistics;
