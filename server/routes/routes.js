const {
    getChampInfo,
    getSummonerName,
    matchHistory,
    currentGame,
    leagueStatus,
    champRotation,
    getSpells
} = require('../controllers/league_api');

module.exports = app => {
    app.post(`/api/log`, getSummonerName);
    app.post('/api/match', matchHistory);
    app.post('/api/game', currentGame);
    app.get('/api/online', leagueStatus);
    app.get('/api/rotation', champRotation);
    app.get('/api/champ', getChampInfo);
    app.get('/api/spells', getSpells)
};