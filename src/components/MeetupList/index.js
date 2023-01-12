import DUMMY_MEETUPS from "../../Dummy-data/DummyMeetup";
import MeetupItem from "../MeetupItem";
import classes from './MeetupList.module.css';

const MeetupList = () => {
  return (
    <ul className={classes.list}>
      {DUMMY_MEETUPS.map((meetup) => (
        <MeetupItem
          title={meetup.title}
          image={meetup.image}
          description={meetup.description}
          location={meetup.location}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
