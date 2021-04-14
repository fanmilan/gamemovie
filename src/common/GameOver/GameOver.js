import './GameOver.scss';
import {Link} from "react-router-dom";

export function GameOver({gameParams}) {
    return <div className="game-over">
        <div className="game-over__inside">
            <div className="game-over__header">
                <h2 className="game-over__title">Игра окончена</h2>
            </div>
            <div className="game-over__body">
                <div className="game-over__score">
                    <div className="game-over__current_score">Счёт: {gameParams.final_score}</div>
                </div>
                <BestScores top_scores={gameParams.top_scores}/>
                <Link className="game-over__link" to="/">Перейти на главную</Link>
            </div>
        </div>
    </div>
}

function BestScores({top_scores}) {

    function topScoresListItems() {
        return top_scores.map((top_score, index) =>
            <tr key={index}>
                <td>{top_score.pos}</td><td>{top_score.user_name}</td><td>{top_score.points}</td><td>{top_score.date}</td>
            </tr>
        )
    }

    return <div className="best-scores">
        <table className="best-scores__table">
            <thead>
            <tr>
                <td>Место</td>
                <td>Пользователь</td>
                <td>Кол-во очков</td>
                <td>Дата</td>
            </tr>
            </thead>
            {topScoresListItems()}
        </table>
    </div>
}