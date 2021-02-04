import React, {Component, Fragment} from 'react';
import classes from './Doctorate.module.css';
import {NavLink} from 'react-router-dom';
import { BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import ProgramContent from '../../../layout/programcontent/ProgramContent';


class Doctorate extends Component {

    render() {
        return (
           <div className={classes.programs}>
               <ProgramContent>
                   <div className={classes.title}>
                   <a href="http://astr.kau.edu.sa/GetFile.aspx?id=244598&Lng=AR&fn=%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1%D8%A7%D8%A9.pdf">تحميل البرنامج</a>
                        <h2>برنامج الدكتوراه</h2>
                        <div></div>
                   </div>
                   <p>بدأ برنامج الدكتوراه مع بداية الفصل الأول من العام 1438/1437 ه</p>
               </ProgramContent>
               <Sidebar name="الأقسام العلمية">
                    <NavLink className={classes.programslink} activeClassName={classes.programslinkactive} to="/programs/1">البكالوريوس</NavLink>
                    <NavLink className={classes.programslink} activeClassName={classes.programslinkactive} to="/programs/2">الماجستير</NavLink>
                    <NavLink className={classes.programslink} activeClassName={classes.programslinkactive} to="/programs/3">الدكتوراه</NavLink>
                </Sidebar>
           </div>
        )
    }
}

export default Doctorate;