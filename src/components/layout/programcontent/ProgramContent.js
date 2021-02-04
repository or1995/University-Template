import React from 'react';
import classes from './ProgramContent.module.css';


const programcontent = (props) => (
        <div className={classes.programcontent}>
            {props.children}
        </div>
)

export default programcontent;