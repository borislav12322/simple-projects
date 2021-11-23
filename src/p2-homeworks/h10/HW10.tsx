import React from 'react'
import s from './HW10.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch


    const loading = useSelector<AppStoreType, boolean>(state => state.loading);

    const dispatch = useDispatch()

    const setLoading = () => {

        dispatch(loadingAC(true));

        const endLoading = () => {
            dispatch(loadingAC(false));
        }

        setTimeout(endLoading, 2000)

        // dispatch
        // setTimeout
        console.log('loading...');
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.container}>
                        <span className={s.circle}></span>
                        <span className={s.circle}></span>
                        <span className={s.circle}></span>
                        <span className={s.circle}></span>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
