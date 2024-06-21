import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 80px 20px;
    background: linear-gradient(135deg, #c3b6d8 0%, #e2dfe2 100%);
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s, transform 0.5s;
`;

const Title = styled(motion.h2)`
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333333;
    text-align: center;
`;

const FormSection = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 20px;
    text-align: center;
`;

const Subtitle = styled.h3`
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #333333;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 10px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    font-size: 1em;
    color: #333;
`;

const Textarea = styled.textarea`
    width: 100%;
    margin-bottom: 10px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    font-size: 1em;
    color: #333;
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

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        to_name: 'Adrian', // 接收消息的名字
        message: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_m7gliw8', // 服务ID
            'template_39g9qf9', // 模板ID
            {
                from_name: formData.from_name,
                to_name: formData.to_name,
                message: formData.message,
                reply_to: formData.email
            },
            '0Jfh298vRlR8UqhmJ' // Public Key
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }).catch((error) => {
            console.log('FAILED...', error);
            alert('Message failed to send.');
        });
    };

    return (
        <ContactContainer
            id="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Title
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                CONTACT ME
            </Title>
            <FormSection>
                <Subtitle>Get in Touch!</Subtitle>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        value={formData.from_name}
                        onChange={handleChange}
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Button type="submit">— SEND —</Button>
                </Form>
            </FormSection>
        </ContactContainer>
    );
};

export default Contact;
