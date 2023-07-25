import React, { useState, useEffect } from 'react';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper.jsx';
import UsersList from '../components/organisms/UsersList/UsersList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setStudents(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ViewWrapper>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
