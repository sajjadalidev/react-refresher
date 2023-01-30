import { FavoriteContext } from "../store/favorite-context";
import { useContext } from "react";
import { MeetupList } from "../Components/meetups/MeetupList";
export const Favorite = () => {
  const favoriteCtx = useContext(FavoriteContext);

  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You have no favorite yet. Find some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <div>
      <h2>Your favorite Meetup</h2>
      {content}
    </div>
  );
};
