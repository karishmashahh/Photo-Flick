import React from 'react';
import { Container } from '@material-ui/core'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import PostDetails from './components/PostDetails/PostDetails';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    
 
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <GoogleOAuthProvider clientId="451411290757-acjn3r0vhevrug1kq6kk0fdh59ovi2j5.apps.googleusercontent.com">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Navigate to="/posts" />} />
                        <Route path="/posts" element={<Home />} />
                        <Route path="/posts/search" element={<Home />} />
                        <Route path="/posts/:id" element={<PostDetails />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/create/:id" element={<Create />} />
                    </Routes>
                </GoogleOAuthProvider>
            </Container>
        </BrowserRouter>


    )
};
export default App;