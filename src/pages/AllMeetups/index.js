import classes from "./AllMeetup.module.css";
import MeetupList from "../../components/MeetupList";

const AllMeetups =()=> {
  return (
    <div className={classes.container}>
      <MeetupList />
    </div>
  );
};

export default AllMeetups;
