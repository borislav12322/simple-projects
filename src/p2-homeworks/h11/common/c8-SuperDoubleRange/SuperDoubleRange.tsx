import React, {ChangeEvent, useState} from 'react'
import {Box, Slider} from "@mui/material";
import {blue} from "@mui/material/colors";
import {isArray, log} from "util";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value1: [number, number];
    minDistance: number
    setValue1: (value: number) => void
    setValue2: (value: number) => void

// min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value1,
        minDistance,
        setValue1,
        setValue2,

        // min, max, step, disable,  ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const [value, setValue] = React.useState<[number, number] | undefined>(value1);

    const newValue1 = value1 && value1;


    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (value) {
            if (activeThumb === 0) {
                setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
                setValue1(value[0])
            } else {
                setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
                setValue2(value[1])
            }
        }
        console.log(value1)
    };


    return (

        <>
            DoubleRange
            <Slider
                value={newValue1}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
            />
        </>
    )
}

export default SuperDoubleRange
