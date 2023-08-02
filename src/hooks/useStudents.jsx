import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!groupId) return;
    axios
      .get(`/students/${groupId}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [groupId]);

  useEffect(() => {
    axios
      .get(`/students`)
      .then(({ data }) => {
        const names = data.students.map((student) => student.name);
        setAllStudents(names);
      })
      .catch((err) => console.log(err));
  }, []);

  return { students, groups, allStudents };
};
