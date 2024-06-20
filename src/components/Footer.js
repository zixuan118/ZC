import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: sticky;
    bottom: 0;
    width: 100%;
    margin-top: auto;
`;

const Footer = () => {
    return (
        <FooterContainer>
            &copy; 2024 Zixuan. All Rights Reserved.
        </FooterContainer>
    );
};

export default Footer;
