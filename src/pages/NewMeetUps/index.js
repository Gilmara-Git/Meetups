import { useHistory } from 'react-router-dom';
import classes from "./NewMeetups.module.css";
import NewMeetupForm from "../../components/NewMeetupForm";
import Card from "../../components/Layout/Card";

const NewMeetups = () => {
    const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch("https://meetup-2f38d-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        ContentType: "application/json",
      },
    }).then(()=>{
        history.replace('/')
    });
  };

  return (
    <section className={classes.formWrapper}>
      <Card>
        <h1 className={classes.title}>Add your Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Card>
    </section>
  );
};

export default NewMeetups;
