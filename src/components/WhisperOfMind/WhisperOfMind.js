import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WhisperOfMindContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 80px 20px;
    background: linear-gradient(to bottom, #d3cce3, #e9e4f0); // 背景渐变颜色
    min-height: 100vh;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s, transform 0.5s;
    font-family: 'Roboto', sans-serif; // 更换字体
`;

const Title = styled(motion.h2)`
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333333; // 字体颜色
    text-align: center;
`;

const NavList = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px; // 增加顶部填充
`;

const NavItem = styled(Link)`
    text-decoration: none;
    color: #333333; // 链接颜色
    font-size: 1.2em;
    margin: 0 15px;

    &:hover {
        color: #8f65b9; // 悬停颜色
    }
`;

const Introduction = styled(motion.p)`
    font-size: 1.2em;
    color: #555;
    max-width: 600px;
    text-align: center;
    margin: 40px auto;
`;

const Divider = styled.hr`
    width: 80%;
    border: 0;
    height: 1px;
    background: #ccc;
    margin: 20px 0;
`;

const WhisperOfMind = () => (
    <WhisperOfMindContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <Title
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            Whisper of Mind
        </Title>
        <Introduction
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        >
            Welcome to Whisper of Mind, where Love, Memories, and Art come alive.
        </Introduction>
        <Divider />
        <NavList>
            <NavItem to="/whisper-of-mind/love">Love</NavItem>
            <NavItem to="/whisper-of-mind/gallery">Gallery</NavItem> {/* 新增的 Gallery 页面 */}
            <NavItem to="/whisper-of-mind/archived-memory">Archived Memory</NavItem>
        </NavList>
        <Divider />
        <Introduction
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
        >

        </Introduction>
    </WhisperOfMindContainer>
);

export default WhisperOfMind;
