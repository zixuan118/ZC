import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
    padding: 80px 20px 20px;
    text-align: center;
    background: linear-gradient(135deg, #c3b6d8 0%, #e2dfe2 100%);
    min-height: 100vh;
    width: 100%; // 确保覆盖整个宽度
    box-sizing: border-box; // 确保内边距和边框被包含在总宽度内
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
    width: 90%; // 调整宽度
    max-width: 600px; // 调整最大宽度
    margin-bottom: 20px; // 调整底部间距
    padding: 15px; // 调整内边距
    border: 1px solid #ccc;
    border-radius: 25px; // 调整边框圆角
    background-color: #fff;
    font-size: 1.2em; // 调整字体大小
    color: #333;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 添加阴影
    transition: box-shadow 0.3s;

    &:focus {
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); // 调整聚焦时的阴影
    }
`;

const Button = styled.button`
    padding: 10px 20px; // 调整按钮大小
    background-color: #a992d4;
    color: white;
    border: none;
    border-radius: 25px; // 调整按钮圆角
    cursor: pointer;
    font-size: 1em; // 调整按钮字体大小
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #9171ad;
        transform: scale(1.05); // 添加悬停时的缩放效果
    }
`;

const About = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate('/chat', { state: { initialQuery: input } });
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
                onSubmit={handleFormSubmit}
            >
                <Input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                />
                <Button type="submit">Submit</Button>
            </Form>
        </AboutContainer>
    );
};

export default About;
