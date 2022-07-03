import React, {ChangeEvent, useEffect} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeEnum} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";




function HW12() {
    const theme = useSelector<AppStoreType, ThemeEnum>(state => state.theme.theme);
    const enumArr = Object.keys(ThemeEnum).map(theme => theme);

    const dispatch = useDispatch();

    useEffect(() => {
        const themeNew = localStorage.getItem('theme');
        if(themeNew) {
            dispatch(changeThemeC(JSON.parse(themeNew as ThemeEnum)))
        }
    }, [])

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        localStorage.setItem('theme', JSON.stringify(e.currentTarget.value))
        dispatch(changeThemeC(e.currentTarget.value as ThemeEnum));

    };

    return (
        <div className={`${s[theme]} + ${s.blockTheme}`}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.blockSelect}>
                <SuperSelect
                        options={enumArr}
                    onChange={onChangeCallback}
                        value={JSON.parse(localStorage.getItem('theme') as ThemeEnum)}
                />
            </div>
            {/*<select className={`${s[theme]} + ${s.select}`} onChange={onChangeCallback}>*/}
            {/*    {mappedOptions}*/}
            {/*</select>*/}
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>

    )

}


export default HW12;
