 import { useRef } from 'react';
 import classes from './NewMeetups.module.css';

const NewMeetups = ()=>{
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        console.log('I was clicked')
    }

    return (
    <div className={classes.formWrapper}>
        <h1>Add your Meetup</h1>
        <div className={classes.form}>           
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type='text' id="title" placeholder='Name your meetup'/>
                </div>

                <div>
                    <label htmlFor="image">Image</label>
                    <input type='text' id="image" placeholder='Enter an image address'/>
                </div>
                <div>
                    <label htmlFor="description">Title</label>
                    <textarea id="description" placeholder='Describe your meetup'/>
                </div>
                <div>
                    <label htmlFor="coord">Coordinates</label>
                    <input type='text' id="coord" placeholder='Provide latitude and longitude'/>
                </div>
                <button>Add your meeting</button>
            </form>
        </div>

    </div>
    )
};

export default NewMeetups; 