import React from 'react'
import s from "./Message.module.scss";

type alternativeMessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: alternativeMessagePropsType) {
    return (
        <div className={s.alternativeMessage}>
            <img className={s.alternativeMessage__avatar} src={props.avatar} alt="avatar"/>
            <div className={s.alternativeMessage__box}>
                <span className={s.alternativeMessage__name}>
                    {props.name}
                </span>
                <div className={s.alternativeMessage__bottom}>
                    <span className={s.alternativeMessage__text}>
                        {props.message}
                    </span>
                    <span className={s.alternativeMessage__time}>
                        {props.time}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
