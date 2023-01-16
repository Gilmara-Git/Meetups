import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../../store/favorites-context";
import React, { useContext } from "react";



const MainNavigation = () => {
  const favCtx = useContext(FavoritesContext);
  const totalFavorites = favCtx.totalFavorites;
  console.log(totalFavorites)
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups Place</div>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to="/" exact activeClassName={classes.active}>
            All Meetups
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/new-meetups" activeClassName={classes.active}>
            Add New Meetup
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/favorites" activeClassName={classes.active}>
            Favorite Meetups
          </NavLink>
            <span className={totalFavorites > 0 ? classes.favoritesActive : classes.favorites }>
              {totalFavorites}               
            </span>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
