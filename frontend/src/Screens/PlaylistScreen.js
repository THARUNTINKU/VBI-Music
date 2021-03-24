import React from 'react';
import {
    Row,
    Col,
    Image,
    Button,
    ButtonGroup,
    Card,
    Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PlaylistView from '../components/PlaylistView';

const PlaylistScreen = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const playlists = useSelector((state) => state.playlists);

    return (
        <Container>
            {playlists && <h2>Playlists</h2>}
            <div className='d-flex justify-content-end'>
                <Link to='/playlists/create'>
                    <Button className='my-3' variant='primary'>
                        <i className='fas fa-plus'></i> Create playlist
                    </Button>
                </Link>
            </div>
            {playlists ? (
                playlists.map((playlist, index) => {
                    return <PlaylistView key={index} playlist={playlist} />;
                })
            ) : (
                <h2>No Playlists</h2>
            )}
        </Container>
    );
};

export default PlaylistScreen;
