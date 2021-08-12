import styled from "styled-components";

export default styled.button`

    background: transparent;
    border: none;
    margin: 0 0 0 20px;
    transition: 0.4s;
    color: ${({ theme }) => theme.color.teal};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }


    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }


    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;