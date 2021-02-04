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
               <div className={classes.programdetail}>
                <table className={classes.detailtable}>
                    <thead className={classes.tablehead}>
                        <th colspan="2">دكتوراه في العلوم الفلكية</th>
                    </thead>
                    <tbody className={classes.tablebody}>
                        <tr>
                        <td>السعوديين وغير السعوديين</td>
                        <td>الفئة المسموح لهم بالتقديم</td>
                        </tr>
                        <tr>
                        <td>المركز الرئيسي السليمانية</td>
                        <td>مقر الدراسة</td>
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
                        <td>جيد جداً</td>
                        <td>التقدير المطلوب</td>
                        </tr>
                        <tr>
                        <td>
                            <h2>أن يكون المتقدم حاصلاً على درجة الماجستير في احد التخصصات التالية</h2>
                            <h3>الرياضيات</h3>
                            <h3>الكيمياء الفيزيائية</h3>
                            <h3>الفلك</h3>
                            <h3>الهندسة (الميكانيكية/الإلكترونية/الطبية)</h3>
                            <h3>علوم الأرض (جيوفيزياء)</h3>
                            <h3>علوم البحار(الفيزياء البحرية)</h3>
                            <h3>الأرصاد</h3>
                        </td>
                        <td>التخصص المطلوب</td>
                        </tr>
                        <tr>
                        <td>يوجد</td>
                        <td>اختبار المفاضلة</td>
                        </tr>
                        <tr>
                        <td>مطلوب درجة 65 كحد أدنى</td>
                        <td>اختبار القدرات العامة للجامعيين</td>
                        </tr>
                        <tr>
                        <td>مطلوب توفل 500 أو ما يعادله <a href="http://graduatestudies.kau.edu.sa/content.aspx?Site_ID=306&lng=AR&cid=61234">التفاصيل</a></td>
                        <td>اختبار اللغة الانجليزية</td>
                        </tr>
                        <tr>
                        <td>مطلوب <a href="http://graduatestudies.kau.edu.sa/content.aspx?Site_ID=306&lng=AR&cid=104788&URL=www.kau.edu.sa">التفاصيل</a></td>
                        <td>موافقة جهة العمل</td>
                        </tr>
                        <tr>
                        <td>
                            <h2>تتم المفاضلة وفق الآتي</h2>
                            <h3>اختبار القدرات العامة للجامعيين 30%، على أن يتم الحصول على درجة 65 كحد أدنى</h3>
                            <h3>الإمكانات البحثية للمتقدم 30%، ويتم تقديرها من قبل القسم العلمي مقابل</h3>
                            <div className={classes.note}>
                                <ul>
                                    <li>الهدف من الدراسة والذي يقدم مكتوبا من قبل المتقدم (Statement of Purpose)</li>
                                    <li>المشاركات البحثية للمتقدم (نشر أبحاث، مشاركة في مناسبات بحثية علمية، أو إسهامات بحثية في تخصص البرنامج)</li>
                                </ul>
                            </div>
                            <h3>يتم قبول من حصل على 70% على الأقل من إجمالي المعايير أعلاه وفقاً للعدد المقترح للقبول، ويجوز لمجلس القسم العلمي قبول من حصل على أقل من هذه الدرجة</h3>
                        </td>
                        <td>آلية المفاضلة</td>
                        </tr>
                    </tbody>
                    <tfoot className={classes.tablefoot} colspan="2">
                    </tfoot>
                </table>
            </div>
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

export default Doctorate;