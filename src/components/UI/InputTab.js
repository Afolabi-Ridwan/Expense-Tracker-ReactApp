import "./InputTab.css";

const InputTab = (prop) => {
  const classes = "InputTab " + prop.className;
  return <input className={classes}>{prop.children}</input>;
};
export default InputTab;
