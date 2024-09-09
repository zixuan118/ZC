import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
    padding: 80px 20px 20px;
    text-align: center;
    background: linear-gradient(135deg, #c3b6d8 0%, #e2dfe2 100%);
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
`;

const Title = styled(motion.h2)`
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333333;
`;

const Description = styled(motion.p)`
    font-size: 1.2em;
    color: #555;
    max-width: 600px;
    margin: 0 auto 40px auto;
`;

const Form = styled(motion.form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 90%;
    max-width: 600px;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    font-size: 1.2em;
    color: #333;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;

    &:focus {
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #a992d4;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #9171ad;
        transform: scale(1.05);
    }
`;

const About = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleZixuanClick = () => {
        navigate('/chat-zixuan', { state: { query: input.trim() } }); // 传递输入内容（允许为空）
    };

    const handleSubmitClick = () => {
        navigate('/chat-ai', { state: { query: input.trim() } }); // 传递输入内容（允许为空）
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // 防止表单的默认提交行为
            handleSubmitClick(); // 回车时默认触发 Submit（OpenAI）
        }
    };

    return (
        <AboutContainer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Title
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                About Me
            </Title>
            <Description
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Chat with me! Ask me anything, and I'll respond as best as I can.
            </Description>
            <Form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <Input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                    onKeyPress={handleKeyPress} // 监听回车键事件
                />
                <ButtonContainer>
                    <Button onClick={handleZixuanClick}>About Zixuan</Button> {/* 子炫模式按钮 */}
                    <Button onClick={handleSubmitClick}>Chat AI</Button> {/* OpenAI模式按钮 */}
                </ButtonContainer>
            </Form>
        </AboutContainer>
    );
};

export default About;
