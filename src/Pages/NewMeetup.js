import { useNavigate } from "react-router-dom";
import { NewMeetupForm } from "../Components/meetups/NewMeetupForm";

export const NewMeetup = () => {
  const navigate = useNavigate();
  const addMeetUpHandler = (meetupData) => {
    fetch(
      "https://react-refresher-17bdf-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>Add New Meetup</h2>
      <NewMeetupForm addMeetup={addMeetUpHandler} />
    </div>
  );
};
