import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
    const nameUseRef = useRef();
    const imageUseRef = useRef();
    const descriptionUseRef = useRef();
    const locationUseRef = useRef();


  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = nameUseRef.current.value;
    const enteredImage = imageUseRef.current.value;
    const enteredDescription = descriptionUseRef.current.value;
    const enteredLocation = locationUseRef.current.value;

    const newMeetup = {
      id: Math.ceil(Math.random() * 1000),
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      location: enteredLocation,
    };


    nameUseRef.current.value = "";
    imageUseRef.current.value = "";
    descriptionUseRef.current.value = "";
    locationUseRef.current.value = "";

    props.onAddMeetup(newMeetup);

  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.fieldContainer}>
          <label htmlFor="name" className={classes.label}>
            Meetup name
          </label>
          <input
            ref={nameUseRef}
            type="text"
            id="name"
            className={classes.inputField}
            placeholder="Name your meetup"
            required
          />
        </div>

        <div className={classes.fieldContainer}>
          <label htmlFor="image" className={classes.label}>
            Image
          </label>
          <input
            ref={imageUseRef}
            type="url"
            id="image"
            className={classes.inputField}
            placeholder="Enter the city image address"
            required
          />
        </div>
        <div className={classes.fieldContainer}>
          <label htmlFor="description" className={classes.label}>
            Description
          </label>
          <textarea
            ref={descriptionUseRef}
            id="description"
            className={classes.inputTextarea}
            placeholder="Describe your meetup"
            rows="2"
            required
          ></textarea>
        </div>
        <div className={classes.fieldContainer}>
          <label htmlFor="location" className={classes.label}>
            City/Country
          </label>
          <input
            ref={locationUseRef}
            type="text"
            id="location"
            className={classes.inputField}
            placeholder="Provide the city and country"
            required
          />
        </div>
        <button className={classes.button}>Add your meetup</button>
      </form>
    </div>
  );
};

export default NewMeetupForm;
