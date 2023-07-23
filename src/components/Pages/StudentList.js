import React from 'react';
import './StudentList.css';
import Title from "../Title";
import StudentList from '../StudentList/StudentList';

export default function Students() {
  return (
    <div className='body-container'>
      <Title>Student List</Title>
      <StudentList />
    </div>
  )
}
