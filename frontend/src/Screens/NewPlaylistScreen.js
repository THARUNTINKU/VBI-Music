import React, { useEffect, useState, useCallback } from 'react';
import {
    Button,
    ButtonGroup,
    InputGroup,
    FormControl,
    Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SearchBox from '../components/SearchBox';
import Song from '../components/Song';
import { createPlaylists } from '../actions/playlistActions';

const NewPlaylistScreen = ({ history }) => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const songList = useSelector((state) => state.songList);
    const { loading, error, songs } = songList;

    const playlistCreate = useSelector((state) => state.playlistCreate);
    const { loading: loadingCreate, error: errorCreate } = playlistCreate;

    const [playlistName, setPlaylistName] = useState('');
    const [addToPlaylist, setAddToPlaylist] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [filteredSong, setFilteredSong] = useState([]);

    const handleFilter = useCallback(() => {
        const filterS = songs.filter((song) =>
            song.title.toLowerCase().includes(searchQuery)
        );
        setFilteredSong(filterS);

        if (filterS.length === 0) setSearchResults(`No records`);
        else if (filterS.length === 1) setSearchResults(`Found 1 record`);
        else if (filterS.length > 1)
            setSearchResults(`Showing ${filterS.length} records`);
    }, [searchQuery, songs]);

    useEffect(() => {
        setFilteredSong(songs);
        if (searchQuery !== '') {
            handleFilter();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, searchQuery, handleFilter]);

    const savePlaylistAction = (e) => {
        const newPlaylist = {
            playlistName,
            playlistSongs: addToPlaylist,
            createdBy: userInfo._id,
        };
        dispatch(createPlaylists(newPlaylist));
        if (addToPlaylist.length !== 0) {
            setAddToPlaylist([]);
            history.push('/playlists');
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleAddPlaylists = (addSongToPlaylist) => {
        setAddToPlaylist([...addToPlaylist, addSongToPlaylist]);
        const newFilter = filteredSong.filter(
            (song) => song._id !== addSongToPlaylist._id
        );
        setFilteredSong(newFilter);
    };

    return (
        <Container>
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            <div className='row no-gutters mb-3'>
                <div className='col-sm-10 px-3'>
                    <h3>
                        <InputGroup className='mb-3'>
                            <InputGroup.Prepend>
                                <InputGroup.Text id='playlist-name'>
                                    Playlist Name
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type='text'
                                className='form-control'
                                name='playlistName'
                                id='playlistName'
                                placeholder='Enter your playlist name'
                                autoFocus=''
                                value={playlistName}
                                onChange={(e) =>
                                    setPlaylistName(e.target.value)
                                }
                                required
                            />
                        </InputGroup>
                    </h3>
                </div>
                <div className='col-sm-2'>
                    <ButtonGroup aria-label='list type' className='d-flex'>
                        <Button
                            variant='primary'
                            onClick={savePlaylistAction}
                            disabled={playlistName.length >= 5 ? false : true}>
                            Save playlist
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className='col-sm-12  d-flex justify-content-center'>
                <div className='col-sm-8'>
                    <SearchBox
                        searchBoxText={searchQuery}
                        searchBoxChange={handleSearch}
                    />
                    {searchQuery ? (
                        <div style={{ float: 'right', paddingBottom: '1%' }}>
                            {searchResults}
                        </div>
                    ) : null}
                </div>
            </div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Container className='py-3'>
                    {filteredSong ? (
                        filteredSong.map((song, index) => (
                            <Song
                                key={index}
                                song={song}
                                showDelete={false}
                                showAddSong={true}
                                handleAddPlaylists={() =>
                                    handleAddPlaylists(song)
                                }
                            />
                        ))
                    ) : (
                        <strong>No songs in playlist</strong>
                    )}
                </Container>
            )}
        </Container>
    );
};

export default NewPlaylistScreen;
