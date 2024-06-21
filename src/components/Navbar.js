import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    z-index: 1000;
`;

const Logo = styled(RouterNavLink)`
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &:hover {
        color: #f0f0f0;
    }
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: ${props => (props.open ? 'flex' : 'none')};
        padding-top: 20px;
    }
`;

const NavItem = styled.li`
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 15px 0;
    }
`;

const NavLink = styled(RouterNavLink)`
    text-decoration: none;
    color: #fff;
    font-size: 1em;
    text-transform: uppercase; 

    &.active {
        font-weight: bold;
        color: #f0f0f0;
    }

    &:hover {
        color: #f0f0f0;
    }
`;

const LanguageSwitcher = styled.div`
    display: flex;
    gap: 10px;
    margin-top: -10px; /* 向上移动 */
    margin-bottom: 10px;

    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
`;

const LanguageButton = styled.button`
    padding: 10px 20px;
    background-color: #444;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #666;
    }
`;

const MenuButton = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-right: 50px; /* 将按钮向左移动 */

    div {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 4px 0;
        transition: transform 0.3s, opacity 0.3s;
    }

    &.open div:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    &.open div:nth-child(2) {
        opacity: 0;
    }

    &.open div:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }
`;

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <NavbarContainer>
            <Logo to="/">ZIXUAN</Logo>
            <MenuButton onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
                <div></div>
                <div></div>
                <div></div>
            </MenuButton>
            <NavList open={menuOpen}>
                <NavItem>
                    <NavLink to="/" onClick={toggleMenu}>{t('home')}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about" onClick={toggleMenu}>{t('about')}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/whisper-of-mind" onClick={toggleMenu}>{t('whisper')}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact" onClick={toggleMenu}>{t('contact')}</NavLink>
                </NavItem>
                <LanguageSwitcher>
                    <LanguageButton onClick={() => changeLanguage('en')}>English</LanguageButton>
                    <LanguageButton onClick={() => changeLanguage('zh')}>中文</LanguageButton>
                </LanguageSwitcher>
            </NavList>
        </NavbarContainer>
    );
};

export default Navbar;
