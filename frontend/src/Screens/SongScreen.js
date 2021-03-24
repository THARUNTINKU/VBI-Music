import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Song from '../components/Song';
import { listSongs } from '../actions/songActions';

const SongScreen = () => {
    const dispatch = useDispatch();

    const songList = useSelector((state) => state.songList);
    const { loading, error, songs } = songList;

    useEffect(() => {
        dispatch(listSongs());
    }, [dispatch]);

    return (
        <div>
            <SearchBox />
            <h2>Latest songs</h2>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Container className='py-3'>
                    {songs.map((song, index) => (
                        <Song
                            key={index}
                            song={song}
                            showDelete={false}
                            showAddSong={false}
                            isEditPlaylist={false}
                        />
                    ))}
                </Container>
            )}
        </div>
    );
};

export default SongScreen;
