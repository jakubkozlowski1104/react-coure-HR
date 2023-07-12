/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const UsersList = (props) => (
  <div>
    {props.data
      ? props.data.map(({ name, age }) => (
          <p>
            {name}, {age}
          </p>
        ))
      : null}
  </div>
);

export default UsersList;
