export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    homeSongs: null,
    currentlyPlaying: null,
}

const reducer = (state, action) => {
    console.log(action);

    // action -> type, [Something]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        
        case 'SET_HOME_SONGS':
            return {
                ...state,
                homeSongs: action.homeSongs,
            }
        
        case 'SET_CURRENTLY_PLAYING':
            return {
                ...state,
                currentlyPlaying: action.currentlyPlaying,
            }

        default:
            return state;
    }
}

export default reducer;