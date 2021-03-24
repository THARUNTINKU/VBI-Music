import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { songListReducer } from './reducers/songReducers';
import { userLoginReducer } from './reducers/userReducers';
// import { flagReducers } from './reducers/flagReducers';
// import { playlistsReducers } from './reducers/playlistReducers';

const reducer = combineReducers({
    songList: songListReducer,
    userLogin: userLoginReducer,
    // flags: flagsReducer,
    // playlists: playlistsReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    flags: {
        showDelete: false,
        showAddSong: false,
        isEditPlaylist: false,
    },
    playlists: [],
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
