

export default {
    state: {
        status: "matching",//当前状态，matching表示正在匹配,playing表示对战界面
        socket: null,//前端向后端的链接
        opponent_username: "",//竞争对手的用户名
        opponent_photo: "",
        gamemap: null,
    },
    getters: {
    },
    mutations: {
        updateSocket(state, socket) {
            state.socket = socket;

        },
        updateOpponent(state, opponent) {
            state.opponent_username = opponent.username;
            state.opponent_photo = opponent.photo;
        },
        updateStatus(state, status) {
            state.status = status;
        },
        updateGamemap(state, gamemap) {
            state.gamemap = gamemap;
        }
    },
    actions: {
    },
    modules: {
    }
}
