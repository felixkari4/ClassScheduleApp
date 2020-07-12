import React from 'react';
import { connect } from 'react-redux'
import courses from '../reducers/courses';

class CourseLibary extends React.Component {

    constructor(props){
        super(props)

        this.renderCourse=this.renderCourse.bind(this);
    }

    renderCourse(course) {
        return (
        <li key={course.description} className="course">
            <div className="course-info">
                <div className="course-title-container">
        <div className="course-title">{course.title}</div>

                </div>
                
            </div>
            <div className="course-decription">
                <h6 className="course-decription-title">course Description</h6>
        <p>{course.description}</p>

            </div>

        </li>
        ) 
    }

    render(){
        return (
            <ul>
            {this.props.courses.map(this.renderCourse)}    
               

            </ul>
        )
    }



}

function mapStateToProps(state) {
    console.log(`state courses are : ${JSON.stringify(state.courses)}`)
    return {courses: state.courses}
}

export default connect(mapStateToProps)(CourseLibary);