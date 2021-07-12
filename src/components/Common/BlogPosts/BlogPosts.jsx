import BlogElement from './BlogElement'

import classes from './BlogPosts.module.css'

function BlogPosts() {
  return(
    <div className={classes.container}>
      <h2>Latest articles from the Aphix Blog</h2>
        <div className={classes.blogPosts}>
          <BlogElement blogNo={'BlogOne'} title={'What is the Right to Repair?'} description={'The right to repair is legislation in the UK that obliges manufacturers to create products that last longer and provide spare parts and documentation for those products.'} author={'Written by Alex E. Pjetra (Product Marketing Executive) last month in'} area={'B2B eCommerce'}/>
          <BlogElement blogNo={'BlogTwo'} title={'Aphix team up with Sapphire Systems to offer digital ordering for SAP Business One'} description={'Aphix & Sapphire Systems bring integrated eCommerce and more to SAP Business One companies in the UK & USA.'} author={'Written by Lyndsey Turner (Marketing Executive) last month in'} area={'News'}/>
        </div>
      <h3>Read more blog articles</h3>
    </div>
  );
};

export default BlogPosts;
