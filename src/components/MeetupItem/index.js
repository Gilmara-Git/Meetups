import classes from './MeetupItem.module.css';
import { useHistory } from 'react-router-dom';
import Card from '../Layout/Card';

const MeetupItem=(props) =>{
    const { id, title, image, description, location } = props;
    const history = useHistory();
    const onClickHandler = ()=>{
        history.push('/favorites', {id: id})
    };

    return (
        <Card>
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
                <div className={classes.buttonContainer} >
                    <button className={classes.favoriteButton} onClick={onClickHandler}>To Favorites</button>
                </div>
            </li>
            
    </Card>
    )
};

export default MeetupItem;