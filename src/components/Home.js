import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    background: url('${process.env.PUBLIC_URL}/background.jpg') no-repeat center center/cover;
    height: 100vh;
`;



const ScrollButton = styled(Link)`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s, color 0.3s;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    text-decoration: none;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

const Home = () => (
    <HomeContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <ScrollButton to="/about">About Me</ScrollButton>
    </HomeContainer>
);

export default Home;
