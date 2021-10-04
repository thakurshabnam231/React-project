import React, { useState ,useRef} from 'react';
import Card from '../UI/Card';
import classes from './UserForm.module.css'
import Button from '../UI/Button.js';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {
     const nameRef=useRef();//create ref
     const ageRef=useRef();
   
    const [error, setError] = useState({});


   const onFormSubmit = (event) => {
        event.preventDefault();
       const  enteredName=(nameRef.current.value);
        const enteredAge=(ageRef.current.value)
        if (enteredName.length === 0 || enteredAge.length === 0) {
            setError({
                title:'invalid input',
                message:'please enter valid name and age(non empty values)',
            })
        return;
    }
        if (+enteredAge < 1) {
            setError({
                title:'invalid age',
                message:'please enter valid age(>0)',
            })
            return;
        }
        const data = {
            name: enteredName,
            age: enteredAge,
            id: Math.random().toString(),
        }
        props.onAddForm(data);
      nameRef.current.value='';
      ageRef.current.value='';

    }
const errorHandler=()=>{
    setError(null);
}
    return (
        <div>
         {error && <ErrorModal title= {error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={onFormSubmit}>
                    <label>username</label>
                    
                    <input type="text" id="username"ref={nameRef}  /> 
                    <br />
                    <label>age</label>
                    <input type="number" id="age"  ref ={ageRef}  /><br />
                    <Button> Add user</Button>
                </form>
            </Card>
        </div>
    )}

export default UserForm
