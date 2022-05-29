import React, {ChangeEvent} from 'react'
import {Box, Slider} from '@material-ui/core'
import s from '../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value3?: [number, number]
    // min: number
    // max: number
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}°C`;
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value3,
         // min, max
        // min, max, step, disable, ...
    }
) => {
 const onChangeCallback2 = (event:  ChangeEvent<{}>, newValue: number | number[]) => {

     // onChangeRange && onChangeRange(newValue = [+event.currentTarget.value, +event.currentTarget.value])
     onChangeRange && onChangeRange(newValue as [number, number])

     // setValue3(newValue as [number, number]);
     //    setValue1(min);

    }

    return (
        <div className={s.blockSlider}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value3}
                onChange={onChangeCallback2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </div>
    )
}

export default SuperDoubleRange
