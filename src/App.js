import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import WhisperOfMind from './components/WhisperOfMind/WhisperOfMind';
import Love from './components/WhisperOfMind/Love';
import ArchivedMemory from './components/WhisperOfMind/ArchivedMemory';
import Gallery from './components/WhisperOfMind/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatComponent from './components/ChatComponent';
import ChatZixuan from './components/ChatZixuan';
import ChatAI from './components/ChatAI';
import './App.css';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/whisper-of-mind" element={<WhisperOfMind />} />
                    <Route path="/whisper-of-mind/love" element={<Love />} />
                    <Route path="/whisper-of-mind/gallery" element={<Gallery />} />
                    <Route path="/whisper-of-mind/archived-memory" element={<ArchivedMemory />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/chat" element={<ChatComponent />} />
                    <Route path="/chat-zixuan" element={<ChatZixuan />} />
                    <Route path="/chat-ai" element={<ChatAI />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
