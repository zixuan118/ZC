import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';  // 引入react-markdown库

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

const Input = styled.input`
    width: calc(100% - 24px);
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 1.1em;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #a992d4;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 10px;
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
        }, 17); // 设置打字动画的速度

        return () => clearInterval(interval);
    }, [message]);

    return <span>{displayedText}</span>;
};

// 渲染Markdown文本，带有逐字动画效果
const MarkdownTypingEffect = ({ content }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + content[index]);
            index++;
            if (index === content.length) {
                clearInterval(interval);
            }
        }, 17);

        return () => clearInterval(interval);
    }, [content]);

    return (
        <div>
            <ReactMarkdown>{displayedText}</ReactMarkdown>
        </div>
    );
};

const ChatAI = () => {
    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const query = location.state?.query || ''; // 获取从About.js传递来的初始问题

    useEffect(() => {
        if (query) {
            const userMessage = { role: 'user', content: query };
            // 调用 OpenAI API 回答初始问题
            handleApiRequest([userMessage]);
        }
    }, [query]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (input.trim()) {
            const userMessage = { role: 'user', content: input };

            // 添加用户消息到对话记录中
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            // 调用 OpenAI API 并传递整个对话记录
            handleApiRequest([...messages, userMessage]);
            setInput(''); // 清空输入框
        }
    };

    const handleApiRequest = async (currentMessages) => {
        try {
            const res = await fetch('https://zixuan-web-e7b7250fbb7c.herokuapp.com/api/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                messages: currentMessages,
                max_tokens: 4096, }), 
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            const assistantMessage = { role: 'assistant', content: data.response };

            // 添加 AI 的消息到对话记录中
            setMessages((prevMessages) => [...prevMessages, assistantMessage]);
        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    };

    return (
        <Container>
            <ChatBox>
                {messages.map((msg, index) => (
                    <Message key={index}>
                        <strong>{msg.role === 'user' ? 'You: ' : 'AI: '}</strong>
                        {msg.role === 'assistant' ? (
                            <MarkdownTypingEffect content={msg.content} />
                        ) : (
                            msg.content
                        )}
                    </Message>
                ))}
                <form onSubmit={handleFormSubmit}>
                    <Input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your question here..."
                    />
                    <Button type="submit">Send</Button>
                </form>
            </ChatBox>
        </Container>
    );
};

export default ChatAI;
