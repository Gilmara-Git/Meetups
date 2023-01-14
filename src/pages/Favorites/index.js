import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import MeetupList from "../../components/MeetupList";
import classes from "./Favorites.module.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';


const Favorites = () => {
  const history = useHistory();
  const favContext = useContext(FavoritesContext);
  const { favorites , totalFavorites } = favContext;  
  const [ browserData, setBrowserData ] = useState([]);

  // console.log(browserData, '15')
  // Different from All meetups, favorites are not being stored in Firebase
  // Favorites are being handled in a Context (store/favorites.context)
  // So, in order to persist the Favorites items in the Favorites page, I stored it in the browser LocalStorage

  useEffect(()=>{
    setBrowserData(favorites)   
    localStorage.setItem('favorites', JSON.stringify(browserData))
  }, [favorites, browserData]);

  // const favoritesFromLocalStorage = localStorage.getItem('favorites');
  // const favoritesStoredInBrowser = JSON.parse(favoritesFromLocalStorage);
  // console.log(favoritesStoredInBrowser, '25') 
  //If I did this code here, an empty array reaches Meetup List, even though it prints in console.log()
  // If I got the data from local storage and setBrowserData again, it would get into an infinite loop
  // setBrowserData(favoritesStoredInBrowser)

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
    content = <MeetupList meetups={browserData} />;
  }

  return (<section className={classes.container}>
          {content}
    </section>)
};

export default Favorites;
