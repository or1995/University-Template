import React, {Component} from 'react';
import classes from './BurgerMenu.module.css';


class BurgerMenu extends Component {
    render() {
        return (
            <div className={this.props.toggle ? [classes.menucontainer, classes.menucontaineropen].join(' ') : classes.menucontainer}>
                {this.props.children}
            </div>
        )
    }
}

export default BurgerMenu;