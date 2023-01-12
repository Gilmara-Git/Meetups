import classes from './MeetupItem.module.css';

const MeetupItem=(props) =>{
    const { title, image, description, location } = props;
    return (
    <li className={classes.list}>
        <h1 className={classes.title}>{title}</h1>
        <img src={image} alt={title} className={classes.image}/>
        <div className={classes.details}>
            <span className={classes.label}>
                <p>{description}</p>
                </span>
            <span> 
                 <p>{location}</p>
            </span>
        </div>

    </li>)
};

export default MeetupItem;