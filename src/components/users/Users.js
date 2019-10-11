import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  // Inicializo el context
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (loading) return <Spinner />;

  return (
    <div style={userStyle}>
      {users.map(u => (
        <UserItem key={u.id} user={u} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
