import DUMMY_MEETUPS from './DummyMeetup.js';
import classes from './AllMeetup.module.css';

const AllMeetups = ()=>{
return (<div className={classes.container}>
   {DUMMY_MEETUPS.map(meetup=><p>{meetup.id}</p>)}
   {/* create a component to display the Dummy meetup  */}
</div>)
};

export default AllMeetups; 