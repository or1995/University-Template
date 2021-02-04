import React, {Component} from 'react';
import classes from './Menu.module.css';

class Menu extends Component {
    render() {
        return (
            <div className={classes.menu}>
                {this.props.noarrow ? null : <div className={classes.arrowup}>
                </div>}
                <div className={classes.menufull}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Menu;