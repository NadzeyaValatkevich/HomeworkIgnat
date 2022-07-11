import React, {ChangeEvent, useEffect, useState} from 'react';
import {requestsAPI} from "./RequestsAPI";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './HW13.module.css'

export function Request() {
    const [data, setData] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.currentTarget.checked
        setChecked(checked)
    };

    const onClickHandler = () => {
        requestsAPI.getData(checked)
            .then((res) => {
                setData(res.data.info)
            })
            .catch((error) => {
                setError(error.response ? error.response.data.errorText : error.message)
            });
        setError('');
    };

    return <div className={s.blockRequest}>
        <SuperCheckbox checked={checked} onChange={onChangeHandler}></SuperCheckbox>
        <SuperButton onClick={onClickHandler}>Send</SuperButton>
        <div className={s.request}>
            {error ? <span className={s.error}>{error}</span> : <span>{data}</span>}
        </div>
    </div>
};