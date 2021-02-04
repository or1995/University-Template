import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink, Link} from 'react-router-dom';


const sidebar = (props) => (
        <div className={classes.programsidebar}>
            <h2 className={classes.programstitle}>{props.name}</h2>
            {props.children}
        </div>
)

export default sidebar;