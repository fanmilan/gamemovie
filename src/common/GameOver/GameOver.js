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
                <Link className="game-over__link" to="/">Перейти на главную</Link>
            </div>
        </div>
    </div>
}