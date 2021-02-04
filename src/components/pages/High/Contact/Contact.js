import React, {Component, Fragment} from 'react';
import classes from './Contact.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import ProgramContent from '../../../layout/programcontent/ProgramContent';


class Contact extends Component {

    render() {
        return (
           <div className={classes.programs}>
               <ProgramContent>
                    <div className={classes.title}>
                        <h2>الاتصال والاستفسار</h2>
                        <div></div>
                   </div>
                   <div className={classes.contact}>
                        <h2>رئيس لجنة الدراسات العليا بالقسم</h2>
                        <ul>
                            <li>د. عايد بن سليمان الرحيلي</li>
                        </ul>
                        <h2>بريد الكتروني</h2>
                        <ul>
                            <li>aalruhaili@kau.edu.sa</li>
                        </ul>
                        <h2>هاتف المكتب</h2>
                        <ul>
                            <li>0126952000 تحويلة 60569</li>
                        </ul>
                   </div>
               </ProgramContent>
                <Sidebar name="الدراسات العليا">
                    <NavLink className={classes.programslink} activeClassName={classes.programslinkactive} to="/highed/masters">الماجستير</NavLink>
                    <NavLink className={classes.programslink} activeClassName={classes.programslinkactive} to="/highed/doctorate">الدكتوراه</NavLink>
                    <a className={classes.programslink} href="http://graduatestudies.kau.edu.sa/content.aspx?Site_ID=306&lng=AR&cid=262969">مواعيد مهمة</a>
                    <a className={classes.programslink} href="http://graduatestudies.kau.edu.sa/Files/306/files/17798_46531_18084.pdf">دليل كتابة الرسائل العلمية</a>
                    <a className={classes.programslink} href="http://www.kau.edu.sa/GetFile.aspx?id=272911&fn=%D8%AF%D9%84%D9%8A%D9%84%20%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA%20%D8%B9%D9%85%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7.pdf">دليل إجراءات العمادة</a>
                    <NavLink className={classes.programslink} activeClassName={classes.programslinkactive} to="/highed/contact">الاتصال و الاستفسار</NavLink>
                </Sidebar>
           </div>
        )
    }
}

export default Contact;