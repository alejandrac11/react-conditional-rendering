import React from 'react';
import './students.styles.css';
import Female from './Female.PNG';
import Male from './Male.PNG';

const Student = (props) => {
    return (
        <div className = "Student">
        <div>
            {props.student.Name}
        </div>
        <div>   
            {
                props.student.Grade < 3 ?
                    <span className = "Red" >{props.student.Grade}</span>
                :
                    <span>{props.student.Grade}</span>
            }
        </div>
        <div className = "Gender">
            <span>{props.student.Gender}</span>
            {
                props.student.Gender === "Female" ?
                    <img src = {Female} className = "Female" />

                :
                    <img src = {Male} className = "Male" />
            }

        </div>
    </div>
    );
}

export default Student;