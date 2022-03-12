import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '';
    const errorStyle = error ? s.errorMessage : '';

    return (
        <div className={s.inputBlock}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressHandler}/>
            <span className={errorStyle}>{error}</span>
            <button onClick={addUser} className={s.addBtn}>add</button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting