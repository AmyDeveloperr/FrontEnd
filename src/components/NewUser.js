import React from 'react';
// import UserForm from './UserForm';
import './NewUser.css';

const NewUser = (props) => {
    

    return (
        <div className='container'>
            <ul> 
                {props.users.map(user => <li key = {user.id}> {user.name} ({user.age} years old)</li>)}
            </ul>
           </div>
    )

}

export default NewUser;