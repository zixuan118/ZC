import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
    padding: 80px 20px;
    text-align: center;
    background: linear-gradient(135deg, #c3b6d8 0%, #e2dfe2 100%);
    min-height: 100vh;
`;

const ChatBox = styled.div`
    width: 90%;
    max-width: 800px; // 调整最大宽度以适应更大屏幕
    margin: 20px auto;
    background-color: white;
    border-radius: 25px; // 调整边框圆角
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 添加阴影
    padding: 30px; // 增加内边距
    text-align: left;
`;

const Message = styled.div`
    margin: 10px 0;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    width: calc(100% - 24px);
    padding: 15px; // 调整内边距
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 25px; // 调整边框圆角
    background-color: #fff; // 保持背景色一致
    font-size: 1.1em; // 调整字体大小
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
    padding: 10px 20px; // 调整按钮大小
    background-color: #a992d4; // 保持一致的背景色
    color: white;
    border: none;
    border-radius: 25px; // 调整边框圆角
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #9171ad;
        transform: scale(1.05); // 添加悬停时的缩放效果
    }
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

const ChatComponent = () => {
    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        if (location.state?.initialQuery) {
            const initialMessages = [{ role: 'user', content: location.state.initialQuery }];
            setMessages(initialMessages);
            handleApiRequest(initialMessages);
        }
    }, [location.state]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        handleApiRequest(newMessages);
        setInput('');
    };

    const handleApiRequest = async (currentMessages) => {
        try {
            const res = await fetch('https://zixuan-web.herokuapp.com/api/ask', { // 更新为 Heroku 部署的 URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: currentMessages }),
            });
            const data = await res.json();
            const updatedMessages = [...currentMessages, { role: 'assistant', content: data.response }];
            setMessages(updatedMessages);
        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    };

    return (
        <Container>
            <ChatBox>
                {messages.map((msg, index) => (
                    <Message key={index}>
                        <strong>{msg.role === 'user' ? 'You: ' : 'ZX: '}</strong>
                        {msg.role === 'assistant' ? <TypingEffect message={msg.content} /> : msg.content}
                    </Message>
                ))}
                <form onSubmit={handleFormSubmit}>
                    <Input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                    />
                    <Button type="submit">Send</Button>
                </form>
            </ChatBox>
        </Container>
    );
};

export default ChatComponent;
