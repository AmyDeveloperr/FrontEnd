import React, {useState} from 'react';
import UserForm from './components/UserForm';
import NewUser from './components/NewUser';

const App = () => {

    const [userData, setUserData] = useState([]);

    const addUserHandler = (uName, uAge) => {
      setUserData(prevData => {
        return [...prevData, {name: uName, age:uAge, id:Math.random().toString()}]
      })
    }
   
  return (
    <div>
      
      <UserForm onAddUser={addUserHandler} />
      <NewUser users={userData} />

    </div>
  );
};

export default App;
