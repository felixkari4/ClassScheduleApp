import React, { Component } from 'react';
import CourseLibary from './courseLibary';

export default class App extends Component {
  render() {
    return  (
      <div className='app'>
        <h1>Course Libary</h1>
        <CourseLibary/>
      </div>
    );
  }
}
