export function Lifelines({lifelines, handleClickLifeline}) {
    return (
        <div className="game__lifelines">
            {lifelines.map(v=><Lifeline value={v} handleClickLifeline={handleClickLifeline}/>)}
        </div>
    )
}

function Lifeline({handleClickLifeline, value}) {
    return <div className={`game__lifeline game__lifeline_${value}`} onClick={handleClickLifeline.bind(null, value)}></div>;
}