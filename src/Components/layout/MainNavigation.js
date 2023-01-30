import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FavoriteContext } from "../../store/favorite-context";
import { useContext } from "react";
export const MainNavigation = () => {
  const favoriteCtx = useContext(FavoriteContext);
  const totalFavorites = favoriteCtx.totalFavorites;
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorite Meetups <span>{totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
