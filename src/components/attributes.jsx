import React from 'react';
import './attributes.styles.css'


const Attributes = (props) => {
    return (
        <div className = "Attributes">
            <div>
                {props.attributeName}
            </div>
            <div>
                {props.attributeGrade}
            </div>
            <div>
                {props.attributeGender}
            </div>
        </div>
    );
}

export default Attributes;