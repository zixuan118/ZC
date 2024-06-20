import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ArchivedMemoryContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 80px 20px;
    background: linear-gradient(135deg, #c3b6d8 0%, #e2dfe2 100%); // 渐变背景颜色
    min-height: 100vh;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s, transform 0.5s;
`;

const Title = styled(motion.h2)`
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333333; // 字体颜色
    text-align: center;
`;

const Description = styled(motion.p)`
    font-size: 1.2em;
    color: #666;
    max-width: 600px;
    text-align: center;
`;

const ArchivedMemory = () => (
    <ArchivedMemoryContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <Title
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            Archived Memory
        </Title>
        <Description
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        >
            This is the Archived Memory page.
        </Description>
    </ArchivedMemoryContainer>
);

export default ArchivedMemory;
