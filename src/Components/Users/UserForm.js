import React,{ useState } from 'react';
import Card from '../UI/Card';
import classes from './UserForm.module.css'
import Button from '../UI/Button.js';

const UserForm = (props) => {
    const [name, setEventName] = useState("");
    const [age, setEventAge] = useState("");


    const eventName = (event) => {
        setEventName(event.target.value);

    }

    const eventAge = (event) => {
        setEventAge(event.target.value);
    }

    const onFormSubmit = (event) => {
       
        event.preventDefault();
        if(name.trim().length===0||age.trim().length===0){
        return;
        }
        if(age<1) {
            return;
        }
        props.onAddForm(name,age);
        setEventName('');
        setEventAge('');
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={onFormSubmit}>
                <label>username</label>
                <input type="text" id="username" value={name} onChange={eventName} />
                <br />
                <label>age</label>
                <input type="number" id="age" value={age} onChange={eventAge} /><br />
            
                <Button> Add user</Button>
            </form>
        </Card>
    )
}

export default UserForm
