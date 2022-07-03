import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";



function HW11() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const [valueStep, setValueStep] = useState(1)
    const [step, setStep] = useState(1)

    const onChangeRange = (newValue:number | number[]) => {
        setValue1(newValue as number);
    };

    const onChangeStepHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueStep(+e.currentTarget.value)
    };

    const onSaveStep = () => {
        setStep(valueStep);
    };

    return (

        <div>
            <hr/>
            homeworks 11
            <div className={s.block11}>
                <div className={s.blockRange}>
                    <div className={s.blockValue}>
                        <span>{value1}</span>
                    </div>
                    <SuperRange
                        value1={value1}
                        onChangeRange={onChangeRange}
                        step={step}
                    />
                    <div>
                        <input className={s.chooseStep} type={'number'} onChange={onChangeStepHandler} value={valueStep}/>
                    </div>
                    <SuperButton onClick={onSaveStep}>Save</SuperButton>
                </div>

                <div>
                    <div className={s.blockValue}>
                        <span>{value1}</span>
                    </div>
                    <SuperDoubleRange
                        value1={value1}
                        value2={value2}
                        step={step}
                        setValue1={setValue1}
                        setValue2={setValue2}
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
