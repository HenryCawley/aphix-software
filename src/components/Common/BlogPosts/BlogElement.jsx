import BlogImage1 from '../../../assets/BlogImage1.jpg'
import BlogImage2 from '../../../assets/BlogImage2.jpg'
import Alex from '../../../assets/Alex.jpg'
import Lyndsey from '../../../assets/Lyndsey.jpg'

import classes from './BlogElement.module.css'

function BlogPosts(props) {
  const blog = {
      BlogOne:BlogImage1,
      BlogTwo:BlogImage2,
  };

  const author = {
      BlogOne:Alex,
      BlogTwo:Lyndsey,
  };

  return(
    <div className={classes.container}>
      <img src={blog[props.blogNo]} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className={classes.author}>
        <img src={author[props.blogNo]} />
        <div className={classes.authorName}>{props.author}<span> {props.area}</span></div>
      </div>
    </div>
  );
};

export default BlogPosts;
