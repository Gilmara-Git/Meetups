import { useState, useEffect } from 'react';
import classes from "./AllMeetup.module.css";
import MeetupList from "../../components/MeetupList";



const AllMeetups =()=> { 
 const [loadedMeetups, setLoadedMeetups] = useState([]);
 const [isLoading, setIsLoading ] = useState(true);
 const [hasError , setHasError ] = useState(null);

 useEffect(()=>{
  setIsLoading(true);
  fetch('https://meetup-2f38d-default-rtdb.firebaseio.com/meetups.json')
  .then(response =>{
    return response.json();
  }).then((data)=>{

    const meetups = [];
    
    for(let meetupObj in data){
      const transformedMeetup = {
          id: meetupObj,
          ...data[meetupObj]
    }
    meetups.push(transformedMeetup)
  }
    setLoadedMeetups(meetups);    
    setIsLoading(false);
  }).catch(error =>{ 
    setHasError(error); 
  })
 
  
}, [])

if(hasError){
  return <section className={classes.errorContainer}>
  <p className={classes.error}>
    An error prevented the page to load meetups.
  </p> 
</section>
}


if(isLoading){
  return (
  <section className={classes.loadingContainer}>
    <p className={classes.loading}>......Loading</p>
  </section>)
}



  return (
    <div className={classes.container}>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetups;
