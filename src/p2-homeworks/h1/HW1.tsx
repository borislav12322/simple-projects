import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import s from './HW1.module.scss';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}
const alternativeMessageData = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    name: 'Other Name',
    message: 'Other text',
    time: '22:01',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
