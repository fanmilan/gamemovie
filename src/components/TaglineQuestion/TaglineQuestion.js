import './TaglineQuestion.scss';

export function TaglineQuestion({question}) {
    return <div className='tagline'>
        <div className='tagline__header'>Какому фильму принадлежит цитата:</div>
        <div className='tagline__question'><div className='tagline__text'>{question}</div></div>
    </div>
}