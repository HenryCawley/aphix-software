import IntegrationTile from './IntegrationTile.jsx'

import classes from './Integrations.module.css'

function Integrations() {
  return(
    <div className={classes.container}>
      <IntegrationTile text={'SAP'} />
      <IntegrationTile text={'Sage'} />
      <IntegrationTile text={'Intact'} />
      <IntegrationTile text={'HARMONiQ'} />
    </div>
  );
};

export default Integrations;
