import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import MeetupList from "../../components/MeetupList";
import classes from "./Favorites.module.css";
import { useHistory } from "react-router-dom";

const Favorites = () => {
  const favContext = useContext(FavoritesContext);
  const totalFavorites = favContext.totalFavorites;
  const history = useHistory();

  const goToAllMeetupHandler = () => {
    history.push("/");
  };

  let content;
  if (totalFavorites === 0) {
    content = (
      <section className={classes.loadingContainer}>
        <p className={classes.loading}>
          You do not have any Favorite Meetups at the moment.
        </p>
        <div className={classes.buttonContainer}>
          <button onClick={goToAllMeetupHandler} className={classes.button}>
            Go to all Meetups
          </button>
        </div>
      </section>
    );
  } else {
    content = <MeetupList meetups={favContext.favorites} />;
  }

  return (<section className={classes.container}>
          {content}
    </section>)
};

export default Favorites;
