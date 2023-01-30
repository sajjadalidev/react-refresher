import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavoriteHandler: (favoriteMeetup) => {},
  removeFavoriteHandler: (meetupId) => {},
  itemIsFavoriteHandler: (meetupId) => {},
});

export function FavoriteContextProvider({ children }) {
  const [userFavorites, setUserFavorite] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorite((preUserFavorite) => {
      return preUserFavorite.concat(favoriteMeetup);
    });
  };
  const removeFavoriteHandler = (meetupId) => {
    setUserFavorite((preUserFavorite) => {
      return preUserFavorite.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
}
