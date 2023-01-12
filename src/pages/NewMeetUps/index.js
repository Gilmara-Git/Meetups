 import { useRef } from 'react';
 import classes from './NewMeetups.module.css';

const NewMeetups = ()=>{
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        console.log('I was clicked')
    }

    return (
    <div className={classes.formWrapper}>
        <h1 className={classes.title}>Add your Meetup</h1>
        <div className={classes.formContainer}>           
            <form onSubmit={onSubmitHandler}>
                <div className={classes.fieldContainer}>
                    <label htmlFor="title" className={classes.label}>Title</label>
                    <input type='text' id="title" className={classes.inputField}placeholder='Name your meetup'/>
                </div>

                <div className={classes.fieldContainer}>
                    <label htmlFor="image" className={classes.label}>Image</label>
                    <input type='text' id="image" className={classes.inputField}placeholder='Enter the city image address'/>
                </div>
                <div className={classes.fieldContainer}>
                    <label htmlFor="description" className={classes.label}>Description</label>
                    <textarea id="description" className={classes.inputTextarea} placeholder='Describe your meetup'rows='3'/>
                </div>
                <div className={classes.fieldContainer}>
                    <label htmlFor="coord" className={classes.label}>City/Country</label>
                    <input type='text' id="coord" className={classes.inputField}placeholder='Provide the city and country'/>
                </div>
                <button className={classes.button}>Add your meeting</button>
            </form>
        </div>

    </div>
    )
};

export default NewMeetups; 