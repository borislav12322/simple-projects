import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeAC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some', 'pink', 'purple'];

function HW12() {
    // const theme = 'some'; // useSelector

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);

    const dispatch = useDispatch()

    const changeTheme = (value: string) => {
        dispatch(changeThemeAC(value))
    }
    // useDispatch, onChangeCallback

    return (
        <div>
            <div className={s[theme]}>
                <hr/>
                <span className={s[theme + '-text']}>
                homeworks 12
            </span>
                <SuperSelect
                    options={themes}
                    onChangeOption={changeTheme}
                    value={theme}
                />

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

                <hr/>
            </div>
            <SuperRadio
                name={'radio'}
                options={themes}
                onChangeOption={changeTheme}
                value={theme}
            />
        </div>
    );
}

export default HW12;
