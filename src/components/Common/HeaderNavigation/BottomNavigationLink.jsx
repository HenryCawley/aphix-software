import classes from './BottomNavigationLink.module.css';

function BottomNavigationLink(props) {
  return(
    <div className={classes.text}>
      {props.text}
    </div>
  );
};

export default BottomNavigationLink;
