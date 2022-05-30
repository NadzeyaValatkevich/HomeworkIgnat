import React, {ChangeEvent, useState} from 'react'
import {Box, Slider} from '@material-ui/core'
import s from '../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    setValue1: (value: number) => void
    setValue2: (value: number) => void
    value1: number
    value2: number
    step: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value1, value2, setValue1, setValue2, step
    }
) => {

    const [disabled, setDisabled] = useState(false)

    const onChangeCallback = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0])
            setValue2(newValue[1])
        }
    };


    return (

        <div className={s.blockSlider}>
            <Slider
                step={step}
                disabled={disabled}
                getAriaLabel={() => 'Temperature range'}
                value={[value1, value2]}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
            />
        </div>
    )
}

export default SuperDoubleRange
