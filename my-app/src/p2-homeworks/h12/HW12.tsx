import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];


function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch();

    const mappedOptions: any[] = themes ? themes.map((elem, index) => {
        return (
            <option className={s.option} key={index} value={elem}>{elem}</option>)
    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    };

    return (
        <div className={`${s[theme]} + ${s.blockTheme}`}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <select className={`${s[theme]} + ${s.select}`} onChange={onChangeCallback}>
                {mappedOptions}
            </select>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>

    );
}

export default HW12;
