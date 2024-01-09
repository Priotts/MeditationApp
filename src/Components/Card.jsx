import { useState, useRef } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const StyledCardContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    opacity: 0.5;
`

const StyledCard = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 45%;
    border-radius: 50%;
    margin-bottom: 10px;
    &:hover{
        background-color: #fbd063;
        color: #2c2d2c;
    }
`

const StyledAudio = styled.audio`
    border: 2px solid green;
    width: 10%;
    height: 10%;
`

function Card({ icon, track }) {
    const [play, setPlay] = useState(false)
    const [volume, setVolume] = useState(1.0);

    const audioRef = useRef()

    const handleClick = () => {
        if (play) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setPlay(!play)
    }

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
        audioRef.current.volume = volume;
    }


    return (
        <StyledCardContainer whileHover={{ opacity: 1 }} >
            <StyledCard onClick={handleClick}>
                {icon}
            </StyledCard>
            {play ? <input type="range" min="0.0" max="1.0" step="0.01" value={volume} onChange={handleVolumeChange} />
                : null
            }
            <StyledAudio>
                <audio ref={audioRef} src={track} loop />
            </StyledAudio>
        </StyledCardContainer>
    )
}

export default Card