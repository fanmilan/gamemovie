import './Question.scss';

export function Question({children}){
    return <div className={'game__question'}>
        {children}
    </div>
}