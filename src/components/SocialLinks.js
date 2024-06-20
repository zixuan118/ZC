import React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const SocialLink = styled.a`
    margin: 0 10px;
    color: #007bff;
    font-size: 1.5em;
    transition: color 0.3s;

    &:hover {
        color: #0056b3;
    }
`;

const SocialLinks = () => {
    return (
        <SocialContainer>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </SocialLink>
        </SocialContainer>
    );
};

export default SocialLinks;
