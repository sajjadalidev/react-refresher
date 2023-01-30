import { useRef } from "react";
import { Card } from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
export const NewMeetupForm = ({ addMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImageURL = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      imageUrl: enteredImageURL,
      address: enteredAddress,
      description: enteredDescription,
    };
    addMeetup(meetupData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required ref={titleInputRef} id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required ref={imageInputRef} id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required ref={addressInputRef} id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            type="text"
            required
            ref={descriptionInputRef}
            id="description"
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
