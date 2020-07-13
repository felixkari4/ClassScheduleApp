import React from 'react';
import { connect,dispatch } from 'react-redux';
import courses from '../reducers/courses';
import {fetchCourses} from '../actions'

class CourseLibary extends React.Component {

    constructor(props){
        super(props)

        this.renderCourse=this.renderCourse.bind(this);
    
    }

    componentDidMount() {
        this.props.fetchCourses()
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
            {/* {alert(JSON.stringify())} */}
            {this.props.courses.map(this.renderCourse)}    
               


            </ul>
        )
    }



}

function mapStateToProps(state) {
    console.log(`state courses are : ${JSON.stringify(state.courses)}`)
    return {courses: state.courses}
}

function mapDispatchToProps(dispatch){
   return{ 
       fetchCourses:() => {
        dispatch(fetchCourses())
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseLibary);