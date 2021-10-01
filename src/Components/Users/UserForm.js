import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './UserForm.module.css'
import Button from '../UI/Button.js';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {
    const [name, setEventName] = useState("");
    const [age, setEventAge] = useState("");
    const [error, setError] = useState();


    const eventName = (event) => {
        setEventName(event.target.value);

    }

    const eventAge = (event) => {
        setEventAge(event.target.value);
    }
    
    const onClickHandler=()=>{
        setError(null);
    }
    const onFormSubmit = (event) => {

        event.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title:'invalid input',
                message:'please enter valid name and age(non empty values)',
            })
            return;
        }
        if (age < 1) {
            setError({
                title:'invalid age',
                message:'please enter valid age(>0)',
            })
            return;
        }
       
        const data = {
            name: name,
            age: age,
            id: Math.random().toString(),
        }
        props.onAddForm(data);
        setEventName('');
        setEventAge('');
    }
    return (
        <div>
         {error &&   <ErrorModal title= {error.title} message={error.message}  onConfirm={error.onClickHandler}/>}
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
        </div>
    )
}

export default UserForm
