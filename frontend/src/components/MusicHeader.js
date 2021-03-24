import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const MusicHeader = () => {
    const [songTab, setSongTab] = useState(false);
    const [playlistTab, setPlaylistTab] = useState(false);

    const handleSongTabVariant = () => {
        setSongTab(true);
        setPlaylistTab(false);
    };

    const handlePlaylistTabVariant = () => {
        setPlaylistTab(true);
        setSongTab(false);
    };

    return (
        <Container>
            <ButtonGroup
                className='button-group-tabs d-flex justify-content-center'
                aria-label='list type'>
                <LinkContainer to='/songs'>
                    <Button
                        variant={songTab ? 'primary' : 'light'}
                        onClick={handleSongTabVariant}>
                        All Songs
                    </Button>
                </LinkContainer>
                <LinkContainer to='/playlists'>
                    <Button
                        variant={playlistTab ? 'primary' : 'light'}
                        onClick={handlePlaylistTabVariant}>
                        All Playlists
                    </Button>
                </LinkContainer>
            </ButtonGroup>
        </Container>
    );
};

export default MusicHeader;
