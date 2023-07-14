import React from 'react';

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        onClick={() => onToggle(user.id)}
        className={`cursor-pointer ${user.active ? 'text-green-700' : ''}`}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)} className='ml-2 border'>
        삭제
      </button>
    </div>
  );
}

export default function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
