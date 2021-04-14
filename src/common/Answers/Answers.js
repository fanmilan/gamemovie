import './Answers.scss';
import {useState} from "react";

export function Answers({options, handleClickAnswer}) {
    return <div className={'game__answers'}>
        {options.map(v=><Answer key={v.id} value={v.value} handleClickAnswer={handleClickAnswer.bind(null, v.id)}/>)}
    </div>
}

function Answer({value, handleClickAnswer}) {

    const [status, setStatus] = useState('');

    return <div className={`game__answer ${status}`} onClick={handleClickAnswer.bind(null, setStatus)}>{value}</div>
}