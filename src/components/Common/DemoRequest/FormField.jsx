import classes from './FormField.module.css'

function FormField(props) {
  return(
    <div className={classes.container}>
      <div className={classes.formTag}>{props.field}</div>
      <input placeholder={props.field} type="text"/>
    </div>
  );
};

export default FormField;
