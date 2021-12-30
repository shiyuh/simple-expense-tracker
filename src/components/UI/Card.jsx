import "./Card.scss"

const Card = (props) => {
    // make sure "className" attribute works with custom components
    const classes = 'card ' + props.className;
    
    //value of children will always be content between opening and closing
    // tags of our custom component
    return <div className={classes}>{props.children}</div> 
}

export default Card;