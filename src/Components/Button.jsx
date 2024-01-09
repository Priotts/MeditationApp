import styled from "styled-components"

const StyledButton = styled.button`
    display: flex;
    font-style: italic;
    align-items: center;
    font-size: 1.1rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #CAA97C;
    border: 1px solid #CAA97C;
    border-radius: 1rem;
    padding: 1rem;
    margin:10px;
    width: auto;
    height: 10%;
    &:hover{
        transform: scale(1.1);
        background-color: #F4D8A6;
        border: 1px solid #F4D8A6;
    }
`

function Button({ text, funct, disabled }) {
    return (
        <StyledButton onClick={funct} disabled={disabled}>{text}</StyledButton>
    )
}

export default Button