import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import s from './HW5.module.css';

function Header() {
    let [checked, setChecked] = useState<boolean>(false);
    const onClickHandler = () => {
        checked ? checked = false : checked = true;
        setChecked(checked);
    }
    return (
            <div className={`${checked ? s.blockNavActive : ''}${s.blockNav}`}>
                <div className={s.blockLink}>
                    <div>
                        <NavLink to={'/pre-junior'}
                                 className={({isActive}) => (isActive ? s.linkNavActive : s.linkNav)}>pre-junior</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/junior'}
                                 className={({isActive}) => (isActive ? s.linkNavActive : s.linkNav)}>junior</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/junior+'}
                                 className={({isActive}) => (isActive ? s.linkNavActive : s.linkNav)}>junior+</NavLink>
                    </div>
                </div>
                <div className={s.signNav} onClick={onClickHandler}></div>
            </div>
    )
}

export default Header
