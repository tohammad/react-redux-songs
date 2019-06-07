import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'titanic',
            duration : '4 mins 5 secs'
        },
        {
            title: 'song 2',
            duration : '2 mins 4 secs'
        },
        {
            title: 'song 3',
            duration : '3 mins 10 secs'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload.song;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});