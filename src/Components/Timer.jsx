import styled from "styled-components";
import { setPreset10Min, setPreset15Min, setPreset30Min, setCustomPreset, startTimer, pauseTimer, stopTimer, decrement } from "../Redux/timer";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef } from "react";
import Button from "./Button";

const StyledTimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    @media only screen and (max-width: 480px) {
        display: flex;
        height: 55%;
        justify-content: flex-start;
}
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        display: flex;
        height: 55%;
        justify-content: flex-start;
    }
    
    @media only screen and (min-width: 769px) and (max-width: 1200px){
        display: flex;
        height: 65%;
        justify-content: flex-start;
}

`
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 25%;
    align-items: center;
    @media only screen and (max-width: 480px) {
        display: flex;
}
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        display: flex;
    }
    @media only screen and (min-width: 769px) and (max-width: 1200px){
        display: flex;
}
`
const StyledCounter = styled.div`
    display: flex;
    color: #F4D8A6;
    justify-content: center;
    width: 100%;
    font-size: 5rem;
    @media only screen and (max-width: 480px) {
        font-size: 3rem;
}
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 5rem;
    }
    @media only screen and (min-width: 769px) and (max-width: 1200px){
        font-size: 6rem;
    }
`

const StyledInput = styled.input`
    width: 20%;
    font-size: 1.1rem;
    border: none;
    background-color: #CAA97C;
    border-radius: 1rem;
    text-align: center;
    @media only screen and (max-width: 480px) {
        width: 30%;
        max-width: 30%;
    }
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        width: 55%;
        max-width: 55%;
    }
    @media only screen and (min-width: 769px) and (max-width: 1200px){
        max-width: 55%;
    }
`

function Timer() {
    const dispatch = useDispatch()
    const timer = useSelector((state) => state.timer.initialValue)
    const running = useSelector((state) => state.timer.isRunning)
    const customValue = useSelector((state) => state.timer.customValue)
    let id = useRef()

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function handlePreset(preset) {
        clearInterval(id.current)
        dispatch(preset())
    }

    useEffect(() => {
        return () => {
            if (id.current) {
                clearInterval(id.current)
            }
            dispatch(stopTimer());
        }
    }, [])

    function handleStart() {
        clearInterval(id.current)
        dispatch(startTimer())
        id.current = setInterval(() => {
            dispatch(decrement())
        }, 1000)
    }

    return (
        <StyledTimerContainer>
            <StyledCounter>{formatTime(timer)}</StyledCounter>
            <StyledContainer>
                <div style={{ display: 'flex', width: '70%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', border:'1px solid red'}}>
                    <Button funct={() => handlePreset(setPreset10Min)} text={'10 MIN'} />
                    <Button funct={() => handlePreset(setPreset15Min)} text={'15 MIN'} />
                    <Button funct={() => handlePreset(setPreset30Min)} text={'30 MIN'} />
                    <StyledInput type="number" value={customValue} onChange={(e) => {
                        if (e.target.value > 0) {
                            dispatch(setCustomPreset(e.target.value));
                            clearInterval(id.current);
                        }
                    }} />
                </div>
                <Button funct={() => { dispatch(stopTimer()), clearInterval(id.current) }} text={'Reset'} disabled={!running ? true : false} />
                    <Button funct={handleStart} text={'Start'} disabled={!running ? false : true} />
                <Button funct={() => { dispatch(pauseTimer()), clearInterval(id.current) }} text={'Pause'} disabled={!running ? true : false} />
            </StyledContainer>
        </StyledTimerContainer>
    )
}

export default Timer;