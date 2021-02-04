import React, {Component, Fragment} from 'react';
import classes from './Header.module.css';
import logo from '../../../media/imgs/KAU_logo.png';
import BurgerMenu from './burgermenu/BurgerMenu';
import Menu from './Menu/Menu';
import {Link} from 'react-router-dom';


class Header extends Component {
    state = {
        toggle: false
    }

    toggleMenu = () => {
        this.setState({toggle: !this.state.toggle})
    }

    toggleMenuOff = () => {
        this.setState({toggle: false})
    }

    render() {
        return (
            <Fragment>
                <BurgerMenu toggle={this.state.toggle}>
                        <div className={classes.links}>
                            <div className={classes.search}>
                                <input placeholder="بحث" className={classes.searchin}/>
                                <button className={classes.searchbtn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
                                </button>
                            </div>
                            <Link className={classes.link} to="/" onClick={this.toggleMenuOff}>English</Link>
                            <Link className={classes.link} to="/head" onClick={this.toggleMenuOff}>رئيس القسم</Link>
                            <a className={classes.link} href="https://www.kau.edu.sa/404.aspx?aspxerrorpath=/Contacts.aspx" onClick={this.toggleMenuOff}>دليل المنسوبين</a>
                            <Link className={classes.link} to="/astro" onClick={this.toggleMenuOff}>القبة الفلكية</Link>
                            <Link className={classes.link} to="/" onClick={this.toggleMenuOff}>أرصاد الشمس</Link>
                            <Link className={classes.link} to="/" onClick={this.toggleMenuOff}>مجالات الخريجين</Link>
                            <Link className={classes.link} to="/" onClick={this.toggleMenuOff}>أنشطة القسم</Link>
                            <Link className={classes.link} to="/" onClick={this.toggleMenuOff}>الملفات</Link>
                    </div>
                </BurgerMenu>
                <div className={this.state.toggle ? [classes.topheader, classes.topheadertransperent].join(' ') : classes.topheader}>
                    <div className={this.state.toggle ? [classes.burger, classes.burgerwhite].join(' ') : classes.burger} onClick={this.toggleMenu}>
                        <div></div>
                        <div className={this.state.toggle ? classes.moveburger : classes.returnburger}></div>
                        <div></div>
                    </div>
                    {this.state.toggle ? null :
                    <div className={classes.headeritems}>
                        <div className={classes.headeritem}>
                            <h2 className="menuhover">المواد</h2>
                            <div className="menudiv">
                                <Menu>
                                    <div className={classes.hoverlinks}>
                                        <div className={classes.hoverlinksin}>
                                            <h3 className={classes.hoverlinkarrow} to="/"><span>مقررات البكالوريوس</span> &#8250;</h3>
                                            <div className={classes.menudivarrow}>
                                                <div className={classes.emptydiv}></div>
                                                <Menu noarrow>
                                                    <div className={classes.hoverlinks}>
                                                        <Link className={classes.hoverlink} to="/">مقررات 200</Link>
                                                        <Link className={classes.hoverlink} to="/">مقررات 300</Link>
                                                        <Link className={classes.hoverlink} to="/">مقررات 400</Link>
                                                    </div>
                                                </Menu>
                                            </div>
                                        </div>
                                        <div className={classes.hoverlinksin}>
                                            <Link className={classes.hoverlink} to="/">مقررات الماجستير<span>&nbsp;&nbsp;&nbsp;</span></Link>
                                        </div>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                        <div className={classes.headeritem}>
                            <h2 className="menuhover">الدراسات العليا</h2>
                            <div className="menudiv">
                                <Menu>
                                    <div className={classes.hoverlinks}>
                                        <Link className={classes.hoverlink} to="/highed/masters">ماجستير</Link>
                                        <Link className={classes.hoverlink} to="/highed/doctorate">دكتوراه</Link>
                                        <a className={classes.hoverlink} href="http://graduatestudies.kau.edu.sa/content.aspx?Site_ID=306&lng=AR&cid=262969">مواعيد مهمة</a>
                                        <a className={classes.hoverlink} href="http://graduatestudies.kau.edu.sa/Files/306/files/17798_46531_18084.pdf">دليل كتابة الرسائل العلمية</a>
                                        <a className={classes.hoverlink} href="http://www.kau.edu.sa/GetFile.aspx?id=272911&fn=%D8%AF%D9%84%D9%8A%D9%84%20%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA%20%D8%B9%D9%85%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7.pdf">دليل إجراءات العمادة</a>
                                        <Link className={classes.hoverlink} to="/highed/contact">الاتصال والاستفسار</Link>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                        <div className={classes.headeritem}>
                            <h2 className="menuhover">البرامج العلمية</h2>
                            <div className="menudiv">
                                <Menu>
                                    <div className={classes.hoverlinks}>
                                        <Link to="/programs/1" className={classes.hoverlink}>برنامج البكالوريوس</Link>
                                        <Link to="/programs/2" className={classes.hoverlink}>برنامج الماجستير</Link>
                                        <Link to="/programs/3" className={classes.hoverlink}>برنامج الدكتوراة</Link>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>}
                    <Link to="/" className={classes.logolink} onClick={this.toggleMenuOff}>
                        <div className={classes.logo}>
                            <div className={classes.logotext}>
                                <h1 className={this.state.toggle ? [classes.logotexttop, classes.logotexttopwhite].join(' ') : classes.logotexttop}>جامعة الملك عبد العزيز</h1>
                                <h2 className={this.state.toggle ? [classes.logotextbottom, classes.logotextbottomwhite].join(' ') : classes.logotextbottom}>كلية العلوم - قسم علوم الفلك والفضاء </h2>
                            </div>
                            <div className={classes.logoimg}>
                                <img src={logo}/>
                            </div>
                        </div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default Header;