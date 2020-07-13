import React, { Component } from 'react';
import CourseLibary from './courseLibary';

export default class App extends Component {
  render() {
    return  (
      <div className='main-container'>

        <div className="libary">
        <h1 className='libary-header'>Course Libary</h1>
        <CourseLibary/>
        </div>



        <div className='schedule'>
          <h1 className='schedule-header'>My schedule</h1>
        </div>
        
      </div>
    );
  }
}
