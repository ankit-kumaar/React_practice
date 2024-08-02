import react from 'react';

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
};

return(
  <form onSubmit={addUserHandler}>
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
    </div>
    <div>
      <label htmlFor="age">Age</label>
      <input type="number" id="age" />
    </div>
    <button type="submit">Add User</button>
    </form>
);
};

export default AddUser; 