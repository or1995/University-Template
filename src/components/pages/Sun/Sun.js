import React, {Component, Fragment} from 'react';
import classes from './Astro.module.css';
import Message from '../Home/Message/Message';


class Astro extends Component {

    render() {
        return (
            <div className={classes.message}>
            <Message right>
                <div className={classes.messagetitle}>
                    <h2>القبة الفلكية</h2>
                    <div>
                    </div>
                </div>
                <div className={classes.messagecontent}>
                    <p>التعريف</p>
                    <ul>
                        <li>القبة الفلكية عبارة عن قاعة دائرية الشكل، مجهزة بأجهزة حاسوبية وتقنية عالية الأداء لتحاكي الأجرام السماوية الواقعة على صفحة السماء، وذلك عن طريق برامج المحاكاة باستخدام السطح الداخلي للقبة للعرض المرئي</li>
                    </ul>
                    <p>الأهداف</p>
                    <ul>
                        <li>تقريب اشكال الأجرام السماوية </li>
                        <li>تشجيع الطلاب على التبحر في علوم الفلك والفضاء</li>
                        <li>دمج التطبيق العملي مع النظري للدراسات الفلكية</li>
                    </ul>
                    <p>الاستخدامات</p>
                    <ul>
                        <li>دراسة الكرة السماوية</li>
                        <li>دراسة الأجرام السماوية بأنواعها من نجوم وكواكب وغيرها</li>
                        <li>محاكاة حركة هذه الأجرام السماوية ودراسة الأحداث المستقبلية الفلكية</li>
                        <li>عرض أفلام تعليمية عن العلوم الفلكية</li>
                    </ul>
                </div>
            </Message>
            </div>
        )
    }
}

export default Astro;