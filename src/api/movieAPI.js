import axios from 'axios';

//const url = 'https://gamemovie.ru/api/game';
//const url = 'http://localhost:8000/api/games/dsdsds';
const url = 'http://localhost:8000/api/games/';


export const startGame = (game_code) => {
    return axios.get(url + game_code + '/new')
        .then(res => res.data);
}


export const getQuestion = (game_id) => {
    console.log(game_id);
    return axios.get(url+game_id)
        .then(res => res.data);
}

export const checkQuestion = (game_id, data) => {
    return axios.post(url+game_id, data)
        .then(res => res.data);
}

export const takeLifeline = (game_id, data) => {
    return axios.post(url+game_id+'/lifeline', data)
        .then(res => res.data);
}