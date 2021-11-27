import React, {useState} from 'react'
import s from './HW11.module.css'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {Box} from "@mui/material";
import SliderSizes from "./common/c7-SuperRange/SuperRangeMUI";

function HW11() {
    const [value1, setValue1] = useState(10);
    const [value2, setValue2] = useState(80);
    const value: [number, number] = [value1, value2];

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={s.numberValue}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value1={value1}
                    valueArr={value}
                    setValue={setValue1}
                />
            </div>

            <div className={s.doubleRange}>
                <Box sx={{width: 300}}>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        value1={value}
                        minDistance={10}
                        setValue1={setValue1}
                        setValue2={setValue2}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <span>{value2}</span>
                </Box>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
)
}

export default HW11
