import React, {Component, Fragment} from 'react';
import classes from './Head.module.css';
import Message from '../Home/Message/Message';


class Head extends Component {

    render() {
        return (
            <div className={classes.message}>
            <Message right>
                <div className={classes.messagetitle}>
                    <h2>رئيس قسم العلوم الفلكية</h2>
                    <div>
                    </div>
                </div>
                <div className={classes.messagecontent}>
                    <p>رئيس القسم</p>
                    <ul>
                        <li>د. حسن بن محمد عسيري</li>
                    </ul>
                    <p>هاتف المكتب</p>
                    <ul>
                        <li>+966-012-6952000 تحويله 64114</li>
                    </ul>
                    <p>البريد الإلكتروني</p>
                    <ul>
                        <li>hasiri@kau.edu.sa</li>
                    </ul>
                    <p>العنوان البريدي</p>
                    <ul>
                        <li>قسم العلوم الفلكية</li>
                        <li className={classes.nostyleli}>كلية العلوم</li>
                        <li className={classes.nostyleli}>جامعة الملك عبد العزيز</li>
                        <li className={classes.nostyleli}>ص. ب 80203</li>
                        <li className={classes.nostyleli}>جده 21589</li>
                    </ul>
                </div>
            </Message>
            </div>
        )
    }
}

export default Head;