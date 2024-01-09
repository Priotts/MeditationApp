import styled from 'styled-components';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    @media only screen and (max-width: 480px) {
        width: 100vw;
        height: 100vh;
}
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        width: 100vw;
        height: 100vh;
    }
    @media only screen and (min-width: 769px) and (max-width: 1200px){
        width: 100vw;
        height: 100vh;
}
`
const StyledRow = styled.div`
    display: flex;
    align-items: ${props => props.$align};
    justify-content: ${props => props.$justify};
    width: 100%;
    height: 50%;
    padding-left: ${props => props.$paddingL};
    padding-right: ${props => props.$paddingR};
    @media only screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: ${props => props.$justifySmart};
        align-items: center;
        padding-left: 0;
        padding-right: 0;
}
    @media only screen and (min-width: 481px) and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: ${props => props.$justifySmart};
            align-items: center;
            padding-left: 0;
            padding-right: 0;
}
    @media only screen and (min-width: 769px) and (max-width: 1200px){
            display: flex;
            flex-direction: column;
            justify-content: ${props => props.$justifySmart};
            align-items: center;
            padding-left: 0;
            padding-right: 0;
}
`;

const StyledTitle = styled(motion.p)`
    width: fit-content;
    height: fit-content;
    text-transform: uppercase;
    font-size: 10rem;
    font-style: italic;
    @media only screen and (max-width: 480px) {
        font-size: 3rem;
}
    @media only screen and (min-width: 481px) and (max-width: 768px) {
            font-size: 4rem;
}
    @media only screen and (min-width: 769px) and (max-width: 1200px){
            font-size: 5rem;
}

`

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 55%;
    @media only screen and (max-width: 480px) {
        position: relative;
        top: -20%;
        height: 20%;
}
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        position: relative;
        top: -20%;
        height: 20%;
}
    @media only screen and (min-width: 769px) and (max-width: 1200px){
        position: relative;
        top: -20%;
        height: 20%;
}
`

const StyledLink = styled(motion(Link))`
        cursor: pointer;
        color: #CAA97C;
        text-decoration: none;
        font-style: italic;
        text-transform: uppercase;
        border-radius: 1rem;
        background-color: transparent;
        border: 1px solid #CAA97C;
        font-size: 2rem;
        padding: 1rem;
    &:hover{
        color: #181815;
        background-color: #F6D8A6
    }
    @media only screen and (max-width: 480px) {
        font-size: 1rem;
}
    @media only screen and (min-width: 481px) and (max-width: 768px) {  
        font-size: 1.5rem;
}
    @media only screen and (min-width: 769px) and (max-width: 1200px){
        font-size: 2rem;
}
`;

function Home() {
    const meditation = "Meditation".split("")
    const online = 'Online'.split("")
    return (
        <StyledHome>
            <StyledRow $align='end' $paddingL='150px' $justifySmart='center'>
                <StyledTitle>
                    {meditation.map((letter, index) => (
                        <motion.span
                            key={index}
                            transition={{ type: 'linear', delay: index * 0.05 }}
                            initial={{ opacity: 0.05 }}
                            animate={{ opacity: 1 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </StyledTitle>
            </StyledRow>
            <StyledRow $align='start' $justify='end' $paddingR='150px' $justifySmart='flex-start'>
                <StyledContainer>
                    <StyledLink to={"/meditation"}
                        initial={{ opacity: 0.01 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: meditation.length * 0.05 + online.length * 0.05 }}
                    >APP</StyledLink>
                </StyledContainer>
                <StyledTitle>
                    {online.map((letter, index) =>
                        <motion.span
                            key={index}
                            initial={{ opacity: 0.1 }}
                            transition={{ type: 'linear', delay: meditation.length * 0.05 + index * 0.05 }}
                            animate={{ opacity: 1 }}
                        >
                            {letter}
                        </motion.span>
                    )}
                </StyledTitle>
            </StyledRow>
        </StyledHome>
    )
}

export default Home;
