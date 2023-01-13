import MeetupItem from "../MeetupItem";
import classes from './MeetupList.module.css';


const MeetupList = (props) => {

  return (   
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
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
