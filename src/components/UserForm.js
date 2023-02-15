import React, { useState } from 'react';
import "./UserForm.css";
const UserForm = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const ageHandler = (e) => {
        setAge(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !age) {
            alert('enter all fields');
            return;
        }    


        props.onAddUser(name, age);
        setName('');
        setAge('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="user-data-wrapper">
        <div className="user-data">
          <label>Name</label>
          <input value={name} onChange={nameHandler} type="text" />
        </div>
        <div className="user-data">
          <label>Age</label>
          <input value={age} onChange={ageHandler} type="number" />
        </div>
      
      <div className="submit">
        <button type='submit'>Add User</button>
      </div>
      </div>
    </form>
  );
};

export default UserForm;
