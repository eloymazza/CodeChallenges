import React from 'react';
import User from '../User/User';
import useUsers from '../../hooks/useUsers';

const UserList = () => {
  const { users, fetchUser, isLoading } = useUsers();

  return (
    <div>
      <h2>User List</h2>
      {isLoading && <div>Loading...</div>}
      {users.length === 0 ? (
        <button onClick={fetchUser}>Fetch User</button>
      ) : (
        <>
          <h3>Current User:</h3>
          <User user={users[0]} />
          <button>Prev User</button>
          <button>Next User</button>
        </>
      )}
    </div>
  );
};

export default UserList;
