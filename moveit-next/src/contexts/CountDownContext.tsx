import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {ChallengesContext} from "./ChallengesContext";

interface CountDownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDownButton: () => void;
    resetCountDownButton: () => void;
}

interface  CountDownProviderProps{
    children: ReactNode
}

export const CountDownContext = createContext({} as CountDownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps){
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    useEffect(() => {
        if(isActive  && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if(isActive && time == 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    function startCountDownButton(){
        setIsActive(true)
    }

    function resetCountDownButton(){
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.1*60)
        setHasFinished(false);
    }

    return(
        <CountDownContext.Provider
        value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDownButton,
            resetCountDownButton
        }}>
            {children}
        </CountDownContext.Provider>
    )
}