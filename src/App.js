import React, { useState } from 'react';
import UserForm from './Components/Users/UserForm';
import UserList from './Components/Users/UserList';

function App() {
  const [userData, setUserData] = useState([])

  const addForm = (userName,userAge) => {
    setUserData((prev) => {
      return [...prev, {name:userName, age:userAge}]
    })
  }
  return (
    <div>
      <UserForm onAddForm={addForm} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
