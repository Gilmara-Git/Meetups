import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (meetup)=>{},
    removeFavorites: (meetupId)=>{},
    isMeetupFavorite: (meetupId)=>{}
    
});

export const FavoritesContextProvider =(props)=>{
  const [ favoritesMeetups, setFavoritesMeetups ] = useState([]);
        
  const addFavoritesHandler =(meetup)=>{
   setFavoritesMeetups((prevMeetup)=> prevMeetup.concat(meetup));
  }

  const removeFavoritesHandler =(meetupId)=>{
    setFavoritesMeetups((prevMeetup)=>prevMeetup.filter(meetup => meetup.id !== meetupId));
  }

  const isMeetupFavorite =(meetupId)=>{
         return favoritesMeetups.some(meetup => meetup.id === meetupId);
  }
  
  const favoritesContextValue ={
        favorites: favoritesMeetups,
        totalFavorites: favoritesMeetups.length,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFavoritesHandler,
        isMeetupFavorite: isMeetupFavorite
     }

    return <FavoritesContext.Provider value={favoritesContextValue}>
                {props.children}
            </FavoritesContext.Provider>
};

export default FavoritesContext;