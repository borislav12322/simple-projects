import React from 'react'
import s from './Message.module.scss'

type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) {
    return (
        <div className={s.message}>
            <img className={s.message__avatar} src={props.avatar} alt="avatar"/>
            <div className={s.message__box}>
                <span className={s.message__name}>
                    {props.name}
                </span>
                <div className={s.message__bottom}>
                    <span className={s.message__text}>
                        {props.message}
                    </span>
                    <span className={s.message__time}>
                        {props.time}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Message
