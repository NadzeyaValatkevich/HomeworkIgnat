import React from 'react';
import classes from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.blockAvatar}>
                <img src={props.avatar} alt={"Avatar"}/>
            </div>
            <div className={classes.blockData}>
                <div className={classes.userName}><p>{props.name}</p></div>
                <div className={classes.userMessage}><p>{props.message}</p></div>
                <div className={classes.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
