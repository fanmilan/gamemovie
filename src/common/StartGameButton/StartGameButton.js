import './StartGameButton.scss';

import {trackPromise} from "react-promise-tracker";
import {startGame} from "../../api/movieAPI";
import {useHistory} from "react-router-dom";

export function StartGameButton({game_code, title}) {

    const history = useHistory();

    const handleClick = () => {
        trackPromise(
            startGame(game_code)
                .then(result => {
                    if (result.success) {
                        history.push('/games/'+result.data.game_id);
                    }
                })
        );
    }

    return <div className='start-game-button' onClick={handleClick}>{title}</div>;

}