import React, {Component, Fragment} from 'react';
import classes from './Masters.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import ProgramContent from '../../../layout/programcontent/ProgramContent';


class Masters extends Component {

    render() {
        return (
           <div className={classes.programs}>
               <div className={classes.programdetail}>
                <table className={classes.detailtable}>
                    <thead className={classes.tablehead}>
                        <th colspan="2">ماجستير علوم الفلك والفضاء</th>
                    </thead>
                    <tbody className={classes.tablebody}>
                        <tr>
                        <td><a href="http://graduatestudies.kau.edu.sa/GetFile.aspx?id=49645">للتحميل اضغط هنا</a></td>
                        <td>الخطة الدراسية للبرنامج</td>
                        </tr>
                        <tr>
                        <td>العلوم</td>
                        <td>الكلية التابع لها البرنامج</td>
                        </tr>
                        <tr>
                        <td>السعوديين وغير السعوديين</td>
                        <td>الفئة المسموح لهم بالتقديم</td>
                        </tr>
                        <tr>
                        <td>انتظام / الفترة الصباحية</td>
                        <td>نوع ومواعيد الدراسة</td>
                        </tr>
                        <tr>
                        <td>عام</td>
                        <td>نوع البرنامج</td>
                        </tr>
                        <tr>
                        <td><a href="https://graduatestudies.kau.edu.sa/content.aspx?Site_ID=306&lng=AR&cid=246322&URL=www.kau.edu.sa">التفاصيل</a></td>
                        <td>شروط القبول العامة</td>
                        </tr>
                        <tr>
                        <td>جيد مرتفع</td>
                        <td>التقدير المطلوب</td>
                        </tr>
                        <tr>
                        <td> إحصاء-حاسبات -الفلك - الفيزياء - رياضيات</td>
                        <td>التخصص المطلوب</td>
                        </tr>
                        <tr>
                        <td>لا يوجد</td>
                        <td>اختبار المفاضلة</td>
                        </tr>
                        <tr>
                        <td>مطلوب الحد الأدنى 65</td>
                        <td>اختبار القدرات العامة للجامعيين</td>
                        </tr>
                        <tr>
                        <td>مطلوب توفل 400 أو ما يعادله <a href="http://graduatestudies.kau.edu.sa/content.aspx?Site_ID=306&lng=AR&cid=61234">التفاصيل</a></td>
                        <td>اختبار اللغة الانجليزية</td>
                        </tr>
                        <tr>
                        <td>مطلوب <a href="http://graduatestudies.kau.edu.sa/content.aspx?Site_ID=306&lng=AR&cid=104788&URL=www.kau.edu.sa">التفاصيل</a></td>
                        <td>موافقة جهة العمل</td>
                        </tr>
                        <tr>
                        <td>
                            <h2>تتم المفاضلة وفق الآتي</h2>
                            <h3>المعدل التراكمي 50%</h3>
                            <h3>اختبار القدرات للجامعيين 40%</h3>
                            <h3>مدى قرب تخصص المتقدم من تخصص البرنامج 10%</h3>
                            <div className={classes.note}>
                                <h4>ملاحظة هامة : يتم تقييم هذه النسبة من القسم العلمي بناء على مايتم إرفاقه من دورات وخبرات (لا يكتفى بذكرها في السيرة الذاتية يجب ارفاق صور منها) في الطلب الإلكتروني من المتقدم</h4>
                            </div>
                        </td>
                        <td>آلية المفاضلة</td>
                        </tr>
                    </tbody>
                    <tfoot className={classes.tablefoot} colspan="2">
                    </tfoot>
                </table>
            </div>
                <Sidebar className={classes.sidebarhide} name="الدراسات العليا">
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

export default Masters;