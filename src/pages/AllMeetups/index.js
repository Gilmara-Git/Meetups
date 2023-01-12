import classes from "./AllMeetup.module.css";
import MeetupList from "../../components/MeetupList";
import DUMMY_MEETUPS from '../../Dummy-data/DummyMeetup';

const AllMeetups =()=> { 
  return (
    <div className={classes.container}>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </div>
  );
};

export default AllMeetups;
