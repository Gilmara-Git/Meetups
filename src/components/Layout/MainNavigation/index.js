import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../../store/favorites-context";
import { useContext } from "react";

const MainNavigation = () => {
  const favAmount = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups Place</div>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link to="/" className={classes.link}>
            All Meetups
          </Link>
        </li>
        <li className={classes.item}>
          <Link to="/new-meetups" className={classes.link}>
            Add New Meetup
          </Link>
        </li>
        <li className={classes.item}>
          <Link to="/favorites" className={classes.link}>
            Favorite Meetups
            <span className={classes.favoritesIndicator}>
                {favAmount.totalFavorites}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
