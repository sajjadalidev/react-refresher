import classes from "./MeetupItem.module.css";
import { Card } from "./../ui/Card";
import { useContext } from "react";
import { FavoriteContext } from "../../store/favorite-context";

export const MeetupItem = ({ id, img, title, address, description }) => {
  const favoriteCtx = useContext(FavoriteContext);
  // console.log(
  //   "🚀 ~ file: MeetupItem.js:8 ~ MeetupItem ~ favoriteCtx",
  //   favoriteCtx
  // );

  const itemIsFavorite = favoriteCtx.itemIsFavorite(id);
  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite({
        imageUrl: img,
        title,
        address,
        description,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            src={img}
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
            alt={title}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favourite" : `To Favourites`}
          </button>
        </div>
      </Card>
    </li>
  );
};
