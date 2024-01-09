import styled from "styled-components"
import logo from "../../assets/image1.svg"
import Card from "../../Components/Card"
import Timer from "../../Components/Timer"
import AudioTracks from "../../Components/AudioTrakc"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const StyledContainer = styled.div`
    display: flex;
    height: 100%;
`

const StyledLeftCol = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    height: 100%;
    width: 30%;
`

const StyledCenterCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 40%;

`

const StyledRightCol = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
    width: 30%;

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
        font-size: 1rem;
        padding: 1rem;
        margin-top: 150px;
    &:hover{
        color: #181815;
        background-color: #F6D8A6
    }
    @media only screen and (max-width: 480px) {
        margin-top: 50%;
}
    @media only screen and (min-width: 769px) and (max-width: 1200px){
            margin-top: 10%;
    }

`;

const StyledLogoContainer = styled(motion.div)`
    display: flex;
    /* border: 1px solid white; */
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
    object-fit: cover;
    @media only screen and (max-width: 480px) {
        height: 10%;
}
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        height: 10%;
    }
    @media only screen and (min-width: 769px) and (max-width: 1200px){
        height: 15%;
}
`


function MeditationApp() {
    return (
        <StyledContainer>
            <StyledLeftCol
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Card icon={AudioTracks[0].img} track={AudioTracks[0].audio} />
                <Card icon={AudioTracks[1].img} track={AudioTracks[1].audio} />
                <Card icon={AudioTracks[2].img} track={AudioTracks[2].audio} />
            </StyledLeftCol>
            <StyledCenterCol>
                <StyledLogoContainer
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <a href="https://github.com/Priotts/MeditationApp" target="_blank">
                        <img src={logo} alt="Logo" width={100} />
                    </a>
                </StyledLogoContainer>

                <Timer />
                <StyledLink to={"/"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}

                >home </StyledLink >
            </StyledCenterCol>
            <StyledRightCol
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Card icon={AudioTracks[3].img} track={AudioTracks[3].audio} />
                <Card icon={AudioTracks[4].img} track={AudioTracks[4].audio} />
                <Card icon={AudioTracks[5].img} track={AudioTracks[5].audio} />
            </StyledRightCol>
        </StyledContainer >
    )
}

export default MeditationApp