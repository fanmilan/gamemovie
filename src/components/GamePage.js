import {Page} from "../common/Page/Page";
import {Game} from "../common/Game/Game";
import {trackPromise} from "react-promise-tracker";
import {getQuestion} from "../api/movieAPI";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function GamePage() {
    let {game_id} = useParams();
    const [gameParams, setGameParams] = useState(null);

    useEffect(
        () => {
            trackPromise(
                getQuestion(game_id)
                    .then(result => {
                        if (result.success) {
                            setGameParams(result.data);
                        }
                    })
            );
        }, [game_id]);

    return <Page>
        <Game gameParams={gameParams} game_id={game_id} setGameParams={setGameParams}/>
    </Page>;
}