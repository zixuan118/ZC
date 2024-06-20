import React from 'react';
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
    padding: 15px 20px; // 调整 padding 增加高度
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
    gap: 30px; // 增加间距
    margin: 0;
    padding: 0;
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
    margin-right: 40px; // 将按钮往左边移动
`;

const LanguageButton = styled.button`
    padding: 5px 10px;
    background-color: #444; // 更和谐的底色
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #666;
    }
`;

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <NavbarContainer>
            <Logo to="/">ZIXUAN</Logo>
            <NavList>
                <NavItem>
                    <NavLink to="/">{t('home')}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about">{t('about')}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/whisper-of-mind">{t('whisper')}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact">{t('contact')}</NavLink>
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
