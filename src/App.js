import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import WhisperOfMind from './components/WhisperOfMind/WhisperOfMind';
import Love from './components/WhisperOfMind/Love';
import ArchivedMemory from './components/WhisperOfMind/ArchivedMemory';
import Gallery from './components/WhisperOfMind/Gallery'; // 新增的 Gallery 页面
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatComponent from './components/ChatComponent'; // 导入 ChatComponent
import './i18n';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/whisper-of-mind" element={<WhisperOfMind />} />
                    <Route path="/whisper-of-mind/love" element={<Love />} />
                    <Route path="/whisper-of-mind/gallery" element={<Gallery />} /> {/* 新增的 Gallery 路由 */}
                    <Route path="/whisper-of-mind/archived-memory" element={<ArchivedMemory />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/chat" element={<ChatComponent />} /> {/* 添加新的路由 */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;