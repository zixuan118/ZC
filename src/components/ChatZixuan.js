import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ratio } from 'fuzzball'; // 使用 fuzzball 的 ratio 函数
import { zixuanQA } from './ZixuanDatabase'; // 导入 zixuanQA 对象
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
        }, 10);

        return () => clearInterval(interval);
    }, [message]);

    return <span>{displayedText}</span>;
};

// 模糊匹配函数，找到与用户输入最相似的问题
const findFuzzyMatch = (input) => {
    let bestMatch = { answer: "抱歉，我找不到这个问题的答案。", score: 0 };

    // 使用 Object.entries() 遍历 zixuanQA 对象的键值对
    Object.entries(zixuanQA).forEach(([question, answer]) => {
        const similarity = ratio(input, question); // 使用 fuzzball 的 ratio 函数计算相似度
        if (similarity > bestMatch.score) {
            bestMatch = { answer, score: similarity };
        }
    });

    // 设置相似度的阈值
    return bestMatch.score >= 70 ? bestMatch.answer : "抱歉，我找不到这个问题的答案。";
};

const ChatZixuan = () => {
    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const query = location.state?.query || ''; // 获取输入内容

    useEffect(() => {
        if (query) {
            const answer = findFuzzyMatch(query); // 使用模糊匹配查找相似问题
            const initialMessages = [
                { role: 'user', content: query },
                { role: 'zixuan', content: answer },
            ];
            setMessages(initialMessages);
        }
    }, [query]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const userMessage = { role: 'user', content: input };
            const answer = findFuzzyMatch(input); // 使用模糊匹配查找相似问题
            const assistantMessage = { role: 'zixuan', content: answer };

            setMessages((prevMessages) => [...prevMessages, userMessage, assistantMessage]);
            setInput('');
        }
    };

    return (
        <Container>
            <ChatBox>
                {messages.map((msg, index) => (
                    <Message key={index}>
                        <strong>{msg.role === 'user' ? 'You: ' : 'Zixuan: '}</strong>
                        {msg.role === 'zixuan' ? (
                            <TypingEffect message={msg.content} />
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
                        placeholder="Ask anything about Zixuan..."
                    />
                    <Button type="submit">Send</Button>
                </form>
            </ChatBox>
        </Container>
    );
};

export default ChatZixuan;
