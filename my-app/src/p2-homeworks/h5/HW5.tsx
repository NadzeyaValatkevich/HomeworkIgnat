import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import s from './HW5.module.css';

function HW5() {
    return (
        <HashRouter>
            <div className={s.block}>
                {/*в gh-pages лучше работает HashRouter*/}
                <Header/>

                <Pages/>

            </div>
        </HashRouter>
    )
}

export default HW5
