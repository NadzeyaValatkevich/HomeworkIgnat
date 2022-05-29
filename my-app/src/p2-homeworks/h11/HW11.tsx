import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css';

function HW11() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const [value3, setValue3] = useState<[number, number]>([0, 100]);
    // let min = value3[0];
    // let max = value3[1];

    const onChangeRange = (newValue:number | number[]) => {
        setValue1(newValue as number);
        setValue3(newValue as [number, number]);
        // setValue2()
    }

    return (

        <div>
            <hr/>
            homeworks 11
            <div className={s.block11}>
                <div>
                    <div className={s.blockValue}>
                        <span>{value1}</span>
                    </div>
                    <SuperRange
                        value1={value1}
                        onChangeRange={onChangeRange}
                    />
                </div>

                <div>
                    <div className={s.blockValue}>
                        <span>{value1}</span>
                    </div>
                    <SuperDoubleRange
                        value3={value3}
                        // min={min}
                        // max={max}
                        onChangeRange={onChangeRange}
                    />
                    <div className={s.blockValue}>
                        <span>{value2}</span>
                    </div>
                </div>
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
