import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlaylistView = ({ playlist }) => {
    const openPlaylistForEdit = (playlist) => {
        console.log(playlist);
    };

    const deletePlaylist = (playlist) => {
        console.log(playlist);
    };

    return (
        <>
            <Container>
                <Card mb={4} style={{ cursor: 'pointer' }}>
                    <Row noGutters style={{ paddingBottom: '2%' }}>
                        <Col md={12}>
                            <Card.Body>
                                <div
                                    style={{ float: 'left', width: '98%' }}
                                    onClick={() =>
                                        openPlaylistForEdit(playlist)
                                    }>
                                    <Card.Title as='h4'>
                                        <span>Playlist : </span>{' '}
                                        {playlist.playlistName}
                                    </Card.Title>
                                    <Card.Subtitle
                                        as='h6'
                                        className='text-muted'>
                                        <span>Created Date : </span>
                                        {
                                            new Date(playlist.createdDate)
                                                .toISOString()
                                                .split('T')[0]
                                        }
                                    </Card.Subtitle>
                                </div>
                                <div
                                    style={{
                                        float: 'right',
                                        position: 'absolute',
                                        right: '2%',
                                    }}
                                    onClick={() => deletePlaylist(playlist)}>
                                    <i class='fad fa-trash'></i>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    );
};

export default PlaylistView;
