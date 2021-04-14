import './Game.scss';
import {TopBar} from '../TopBar/TopBar';
import {Question} from "../Question/Question";
import {Answers} from "../../components/Answers/Answers";
import {checkQuestion, takeLifeline} from "../../api/movieAPI";
import {PosterQuestion} from "../../components/PosterQuestion/PosterQuestion";
import {GameOver} from "../GameOver/GameOver";
import {useState} from "react";
import {TaglineQuestion} from "../../components/TaglineQuestion/TaglineQuestion";


export function Game({gameParams, game_id, setGameParams}) {

    const [inProgress, setInProgress] = useState(false);

    function handleClickAnswer(id, setStatus) {
        if (!inProgress) {
            setInProgress(true);
            checkQuestion(game_id, {user_answer: id})
                .then(result => {
                    if (result.success) {
                        setStatus('correct');
                        (result.data.correct) ? setStatus('correct') : setStatus('wrong');
                        setTimeout(function () {
                            setGameParams(result.data.params);
                            setStatus('');
                            setInProgress(false);
                        }, 1000);

                    }
                });
        }
    }

    function handleClickLifeline(lifeline_value) {
        takeLifeline(game_id, {value : lifeline_value})
            .then(result => {
                if (result.success){
                    setGameParams(result.data);
                }

            });
    }

    function renderQuestion() {
        switch (gameParams.game_type) {
            case 1:
                return <PosterQuestion question={'http://gamemovie.ru/' + gameParams.question}/>;
            case 2:
                return <TaglineQuestion question={gameParams.question} />
            default:
                return false;
        }
    }

    function renderGameBody() {
        if (gameParams.type === 'gameover') {
            return <GameOver gameParams={gameParams}/>;
        } else {
            return <>
                <TopBar lives={gameParams.lives} points={gameParams.points} lifelines={gameParams.lifelines} handleClickLifeline={handleClickLifeline}/>
                <Question>
                    {renderQuestion()}
                </Question>
                <Answers options={gameParams.answers} handleClickAnswer={handleClickAnswer}/>
            </>;
        }
    }

    return <div className={'game'}>
            {gameParams && renderGameBody()}
        </div>;
}

