import React, {Component, Fragment} from 'react';
import classes from './Programs.module.css';
import {NavLink} from 'react-router-dom';
import { BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Bachelor from './Bachelor/Bachelor';
import Masters from './Masters/Masters';
import Doctorate from './Doctorate/Doctorate';


class Programs extends Component {
    state = {
        program: null
    }

    render() {
        return (
            <Router>
           <div className={classes.programs}>
               <Switch>
                    <Route exact path="/programs/1" component={Bachelor}/>
                    <Route exact path="/programs/2" component={Masters}/>
                    <Route exact path="/programs/3" component={Doctorate}/>
                </Switch>
                <div className={classes.programsidebar}>
                   <h2 className={classes.programstitle}>الأقسام العلمية</h2>
                   <NavLink className={classes.programslink} activeClassName={classes.programslinkactive} to="/programs/1">البكالوريوس</NavLink>
                   <NavLink className={classes.programslink} activeClassName={classes.programslinkactive} to="/programs/2">الماجستير</NavLink>
                   <NavLink className={classes.programslink} activeClassName={classes.programslinkactive} to="/programs/3">الدكتوراه</NavLink>
               </div>
           </div>
           </Router>
        )
    }
}

export default Programs;