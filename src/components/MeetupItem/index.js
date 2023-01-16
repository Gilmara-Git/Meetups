import classes from "./MeetupItem.module.css";
import Card from "../Layout/Card";
import React, { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { FaHeart} from "react-icons/fa";

const MeetupItem = (props) => {

  const { id, title, image, description, location } = props;
  const FavCtx = useContext(FavoritesContext);

  const isFavorite = FavCtx.isMeetupFavorite(id);

  const toggleFavoriteHandler = () => {
    if (isFavorite) {
      FavCtx.removeFavorites(id);
    } else {
      FavCtx.addFavorites({
        id,
        title,
        image,
        description,
        location,
      });
    }
  };

  return (
    <Card>
      <li className={classes.list}>
        <div className={classes.favoriteAligner}>
          <h1 className={classes.title}>{title}</h1> 
          {isFavorite &&<FaHeart color="green"/>} 
        
        </div>
        <img src={image} alt={title} className={classes.image} />
        <div className={classes.details}>
          <span className={classes.label}>
            <p>{description}</p>
          </span>
          <span>
            <p>{location}</p>
          </span>
        </div>
        <div className={classes.buttonContainer}>
          <button
            className={classes.favoriteButton}
            onClick={toggleFavoriteHandler}
          >
            {isFavorite ? "Remove from favorites" : " To favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
