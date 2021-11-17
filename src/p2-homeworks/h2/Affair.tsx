import React from 'react'
import s from './Affairs.module.css';
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
    id: number
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    }// need to fix

    return (
        <div className={s.affairBox}>
            <span className={s.name}>
                {props.affair.name}
            </span>
            <span className={s.priority}>
                {props.affair.priority}
            </span>

            <button onClick={deleteCallback}>X</button>

        </div>
    )
}

export default Affair
