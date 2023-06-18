import "./Cards.css";

function Cards(prop) {
  const classes = "Cards " + prop.className;
  return <div className={classes}>{prop.children}</div>;
}

export default Cards;

// import "./Cards.css";

// function Cards(prop) {
//   const classes = "Cards " + prop.className;
//   return <div className={classes}> {prop.children}</div>;
// }

// export default Cards;
