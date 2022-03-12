import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (() => {props.deleteAffairCallback(props.affair._id)})// need to fix
    let priorityAffairsColor;
    if(props.affair.priority === 'low') {
        priorityAffairsColor = s.priorityAffairsLow
        } else if(props.affair.priority === 'middle') {
        priorityAffairsColor = s.priorityAffairsMiddle
        } else {priorityAffairsColor = s.priorityAffairsHigh}

    return (
        <div key={props.affair._id} className={s.blockAffair}>

            <span className={s.nameAffairs}>{props.affair.name}</span>
            <span className={`s.priorityAffairs ${priorityAffairsColor}`}>{props.affair.priority}</span>
            {/*<span className={s.priorityAffairs}>{props.affair.priority}</span>*/}


            <button onClick={deleteCallback} className={s.deleteBtn}>delete</button>
        </div>
    )
}

export default Affair
