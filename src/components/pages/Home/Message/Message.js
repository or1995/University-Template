import React, {Component} from 'react';
import classes from './Message.module.css';



class Message extends Component {
    render() { 
        if(this.props.right) {
        return (<div className={classes.messagedivright}>
            <div className={classes.frontright}>
                {this.props.children}
            </div>
            <div className={classes.backright}></div>
        </div>) }
        else {
        return (<div className={classes.messagedivleft}>
            <div className={classes.backleft}></div>
            <div className={classes.frontleft}>
                {this.props.children}
            </div>
        </div>)}
    }
}

export default Message;