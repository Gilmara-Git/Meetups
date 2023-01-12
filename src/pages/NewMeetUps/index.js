 import classes from './NewMeetups.module.css';
import NewMeetupForm from '../../components/NewMeetupForm';
import Card from '../../components/Layout/Card';

const NewMeetups = ()=>{

    return (
        <section className={classes.formWrapper}>
        <Card>
        <h1 className={classes.title}>Add your Meetup</h1>
        <NewMeetupForm />
        </Card>
    </section>
    )
};

export default NewMeetups; 