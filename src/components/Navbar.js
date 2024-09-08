import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px; /* 调整内边距，避免按钮被裁切 */
    z-index: 1000;
    box-sizing: border-box; /* 确保padding不会影响宽度 */
`;

const Logo = styled(RouterNavLink)`
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    margin-right: 30px; /* 确保Logo与导航项有足够的间距 */

    &:hover {
        color: #f0f0f0;
    }
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px; /* 导航项之间的间距 */
    margin: 0;
    padding: 0;
    white-space: nowrap; /* 防止导航项换行 */
`;

const NavItem = styled.li`
    flex-shrink: 0; /* 防止导航项被缩小 */
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

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo to="/">ZIXUAN</Logo>
            <NavList>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/whisper-of-mind">Whisper</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact">Contact</NavLink>
                </NavItem>
            </NavList>
        </NavbarContainer>
    );
};

export default Navbar;
