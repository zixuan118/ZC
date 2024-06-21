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
    }
`;

const NavItem = styled.li``;

const NavLink = styled(RouterNavLink)`
    text-decoration: none;
    color: #fff;
    font-size: 1em;

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
    margin-right: 40px;

    @media (max-width: 768px) {
        margin-right: 0;
    }
`;

const LanguageButton = styled.button`
    padding: 5px 10px;
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
    display: none;
    flex-direction: column;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
    }

    div {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 4px 0;
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
            <MenuButton onClick={toggleMenu}>
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
            </NavList>
            <LanguageSwitcher>
                <LanguageButton onClick={() => changeLanguage('en')}>English</LanguageButton>
                <LanguageButton onClick={() => changeLanguage('zh')}>中文</LanguageButton>
            </LanguageSwitcher>
        </NavbarContainer>
    );
};

export default Navbar;
