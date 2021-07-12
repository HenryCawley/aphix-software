import classes from './TopNavigationLink.module.css';

function TopNavigationLink(props) {
  return(
    <div className={classes.text}>
      {props.text}
    </div>
  );
};

export default TopNavigationLink;
