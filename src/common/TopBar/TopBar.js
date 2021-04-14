import {Lifelines} from "../Lifelines/Lifelines";

export function TopBar({points, lives, lifelines, handleClickLifeline}) {
    return <div className={'game__top-bar'}>
        <Lifelines lifelines={lifelines} handleClickLifeline={handleClickLifeline}/>
        <CountPointerBlock points={points}/>
        <LivesBlock lives={lives}/>
    </div>;
}



function CountPointerBlock({points}) {
    return (
        <div className="game__points-block">{points}</div>
    );
}

function LivesBlock({lives}) {
    let LivesItems = [];
    for (let i = 0; i < lives; i++) {
        LivesItems.push(<div className="game__life"></div>);
    }

    return (
        <div className="game__lives-block">
            {LivesItems}
        </div>
    );
}
