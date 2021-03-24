import React, { useState } from 'react';
import {
    Row,
    Col,
    Image,
    Button,
    ButtonGroup,
    InputGroup,
    FormControl,
    Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SearchBox from '../components/SearchBox';
import Song from '../components/Song';

const NewPlaylistScreen = () => {
    const [playlistName, setPlaylistName] = useState('');
    const [addToPlayList, setAddToPlayList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const songList = useSelector((state) => state.songList);
    const { loading, error, songs } = songList;

    const savePlaylistAction = (playlistInfo) => {};

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <Container>
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
                                    placeholder='Enter your playlist name '
                                    autoFocus=''
                                    onChange={(e) =>
                                        setPlaylistName(e.target.value)
                                    }
                                    autoComplete='off'
                                    value={playlistName}
                                />
                            </InputGroup>
                        </h3>
                    </div>
                    <div className='col-sm-2'>
                        <ButtonGroup aria-label='list type' className='d-flex'>
                            <Button
                                variant='primary'
                                onClick={() => savePlaylistAction()}>
                                Save playlist
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className='col-sm-12  d-flex justify-content-center'>
                    <div className='col-sm-8'>
                        <SearchBox
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
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
                                showAddSong={true}
                                isEditPlaylist={false}
                            />
                        ))}
                    </Container>
                )}
            </Container>
        </>
    );
};

export default NewPlaylistScreen;
