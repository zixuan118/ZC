import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { findAnswer } from './ZixuanDatabase';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
    padding: 80px 20px;
    text-align: center;
    background: linear-gradient(135deg, #c3b6d8 0%, #e2dfe2 100%);
    min-height: 100vh;
`;

const ChatBox = styled.div`
    width: 90%;
    max-width: 800px;
    margin: 20px auto;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 30px;
    text-align: left;
`;

const Message = styled.div`
    margin: 10px 0;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TypingEffect = ({ message }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + message[index]);
            index++;
            if (index === message.length) {
                clearInterval(interval);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [message]);

    return <span>{displayedText}</span>;
};

const ChatZixuan = () => {
    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const query = location.state?.query || '';

    useEffect(() => {
        if (query) {
            const answer = findAnswer(query);
            const newMessages = [
                { role: 'user', content: query },
                { role: 'zixuan', content: answer || '抱歉，我找不到这个问题的答案。' },
            ];
            setMessages(newMessages);
        }
    }, [query]);

    return (
        <Container>
            <ChatBox>
                {messages.map((msg, index) => (
                    <Message key={index}>
                        <strong>{msg.role === 'user' ? 'You: ' : 'Zixuan: '}</strong>
                        <TypingEffect message={msg.content} />
                    </Message>
                ))}
            </ChatBox>
        </Container>
    );
};

export default ChatZixuan;
