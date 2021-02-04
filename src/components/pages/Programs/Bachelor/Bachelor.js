import React, {Component, Fragment} from 'react';
import classes from './Bachelor.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import ProgramContent from '../../../layout/programcontent/ProgramContent';


class Bachelor extends Component {

    render() {
        return (
           <div className={classes.programs}>
               <ProgramContent>
                   <div className={classes.title}>
                   <a href="http://sciences.kau.edu.sa/Files/130/files/5033_study%20plan%20and%20description%20Arabic%20for%20Astr.pdf">تحميل البرنامج</a>
                        <h2>برنامج البكالوريوس</h2>
                        <div></div>
                   </div>
                   <p>يمنح القسم درجة البكالوريوس في التخصص المزدوج فلك-فيزياء وفلك-رياضيات منذ عام 1396هـ
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

export default Bachelor;