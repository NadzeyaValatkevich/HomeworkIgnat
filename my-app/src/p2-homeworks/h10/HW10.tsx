import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import s from './HW10.module.css'

function HW10() {
    const isloading = useSelector<AppStoreType, boolean>(state => state.loading.isloading);
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {dispatch(loadingAC(false))}, 2000)
    };
    return (
        <div className={s.block10}>
            <hr/>
            homeworks 10
            <div className={s.blockLoading}>
            {isloading
                ? (
                    <div>
                        <svg  xmlns="http://www.w3.org/2000/svg" version="1.0" width="64px" height="64px" viewBox="0 0 128 128"><g><path d="M71 39.2V.4a63.6 63.6 0 0 1 33.96 14.57L77.68 42.24a25.53 25.53 0 0 0-6.7-3.03z" fill="#000"/><path d="M71 39.2V.4a63.6 63.6 0 0 1 33.96 14.57L77.68 42.24a25.53 25.53 0 0 0-6.7-3.03z" fill="#e1e1e1" transform="rotate(45 64 64)"/><path d="M71 39.2V.4a63.6 63.6 0 0 1 33.96 14.57L77.68 42.24a25.53 25.53 0 0 0-6.7-3.03z" fill="#e1e1e1" transform="rotate(90 64 64)"/><path d="M71 39.2V.4a63.6 63.6 0 0 1 33.96 14.57L77.68 42.24a25.53 25.53 0 0 0-6.7-3.03z" fill="#e1e1e1" transform="rotate(135 64 64)"/><path d="M71 39.2V.4a63.6 63.6 0 0 1 33.96 14.57L77.68 42.24a25.53 25.53 0 0 0-6.7-3.03z" fill="#bebebe" transform="rotate(180 64 64)"/><path d="M71 39.2V.4a63.6 63.6 0 0 1 33.96 14.57L77.68 42.24a25.53 25.53 0 0 0-6.7-3.03z" fill="#979797" transform="rotate(225 64 64)"/><path d="M71 39.2V.4a63.6 63.6 0 0 1 33.96 14.57L77.68 42.24a25.53 25.53 0 0 0-6.7-3.03z" fill="#6e6e6e" transform="rotate(270 64 64)"/><path d="M71 39.2V.4a63.6 63.6 0 0 1 33.96 14.57L77.68 42.24a25.53 25.53 0 0 0-6.7-3.03z" fill="#3c3c3c" transform="rotate(315 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform></g><g><circle fill="#000" cx="63.66" cy="63.16" r="12"/><animate attributeName="opacity" dur="720ms" begin="0s" repeatCount="indefinite" keyTimes="0;0.5;1" values="1;0;1"/></g></svg>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
