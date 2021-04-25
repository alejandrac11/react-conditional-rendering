import React from 'react';
import './courses.styles.css';

const Course = (props) => {
    return (
        <div className = "Course" >
            {props.CourseName}
        </div>
    );
}

export default Course;