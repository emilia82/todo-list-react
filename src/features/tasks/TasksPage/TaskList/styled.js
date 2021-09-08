import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
    &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.teal};
    }
    `;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    `;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 2px slid ${({ theme }) => theme.color.alto};
    
    ${({ hidden }) => hidden && css`
    display: none;
    `}
    `;

export const Content = styled.span`
${({ done }) => done && css`
    text-decoration: line-through;
    `}
    `;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.4s;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.color.forestGreen};
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.color.crimson};
    `}

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;