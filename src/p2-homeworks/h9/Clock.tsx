import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId);
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())

        }, 1000)
        setTimerId(id)
        console.log(id)
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    console.log()

    const stringTime = date?.toLocaleTimeString('ru') || <br/> // fix with date
    const stringDate = date?.toLocaleDateString('ru') // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div className={s.date}>
                    {stringDate}
                </div>
            ): (<br/>)
        }

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
