import React, {Component, Fragment} from 'react';
import classes from './Masters.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import ProgramContent from '../../../layout/programcontent/ProgramContent';


class Masters extends Component {

    render() {
        return (
           <div className={classes.programs}>
               <ProgramContent>
                   <div className={classes.title}>
                   <a href="http://astr.kau.edu.sa/GetFile.aspx?id=244597&Lng=AR&fn=%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%A7%D9%84%D9%85%D8%A7%D8%AC%D8%B3%D8%AA%D9%8A%D8%B1.pdf">تحميل البرنامج</a>
                        <h2>برنامج الماجستير</h2>
                        <div></div>
                   </div>
                   <p>بدأ القسم في منح درجة الماجستير منذ عام 1424هـ 
                    </p>
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

export default Masters;