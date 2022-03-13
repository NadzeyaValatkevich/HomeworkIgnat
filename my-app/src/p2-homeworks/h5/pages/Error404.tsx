import React from 'react';
import s from '../HW5.module.css';

function Error404() {
    return (
        <div className={s.errorBlock}>
            <div className={s.errorName}>404</div>
            <div className={s.errorDescription}>Page not found!</div>
            <div className={s.errorImg}>
                <img src={'http://1.bp.blogspot.com/-oEdnYFGlm7A/UmI4EkCvg0I/AAAAAAAAAHk/JYg5ZlMmQ7s/s400/Jerry_7.png'}
                     alt={'Jerry'}/>
            </div>
        </div>
    )
}

export default Error404
