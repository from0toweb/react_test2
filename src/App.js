import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.sass';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="App">
            <NavBar setModalOpen={setModalOpen} modalOpen={modalOpen} />
            <main>
                <Route path="/" exact component={Main} />
                <Route path="/news" component={News} />

                <LoginPopup modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </main>
        </div>
    );
}

export default App;
