import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import HomeScreen from './Screens/HomeScreen';
import SongScreen from './Screens/SongScreen';
import PlaylistScreen from './Screens/PlaylistScreen';
import NewPlaylistScreen from './Screens/NewPlaylistScreen';

function App() {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/songs' component={SongScreen} />
                    <Route
                        path='/playlists/create'
                        component={NewPlaylistScreen}
                    />
                    <Route path='/playlists' exact component={PlaylistScreen} />
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/not-found' component={NotFound}></Route>
                    {/* <Redirect from='/' exact to='/songs' /> */}
                    {/* <Redirect to='/not-found' /> */}
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
