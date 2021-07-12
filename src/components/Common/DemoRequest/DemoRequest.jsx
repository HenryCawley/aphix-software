import Testimonial from '../../../assets/Testimonial.png'

import FormField from './FormField.jsx'

import classes from './DemoRequest.module.css'

function DemoRequest() {
  return(
    <div className={classes.container}>
      <div className={classes.demoRequestBanner}>
        <h2>Request Your Demo Today</h2>
        <h3>Get the full experience of the Aphix Digital Platform from a member of our dedicated (and award-winning!) team.</h3>
      </div>

      <div className={classes.triangle}></div>

      <div className={classes.demo}>
        <div className={classes.testimonial}>
          <p>"Integration with our ERP system is a massive benefit to us. All customers price lists are available to them immediately. We now spend less time phoning the office to check pricing and stock levels, which means more time for internal sales to actually sell, follow up quotes and chase leads."</p>
          <span>Ian McLoughlin - Demesne Electrical</span>
          <img src={Testimonial}/>
        </div>

        <div className={classes.demoRequestForm}>
          <FormField field={'Your first name'} />
          <FormField field={'Your last name'} />
          <FormField field={'Your Company Name'} />
          <FormField field={'Company email'} />
          <FormField field={'Phone number'} />
          <button className={classes.requestButton}>Request a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default DemoRequest;
