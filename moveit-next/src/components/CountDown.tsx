import {useState, useEffect, useContext} from "react";
import style from '../style/components/CountDown.module.css'
import {ChallengesContext} from "../contexts/ChallengesContext";

let countdownTimeout: NodeJS.Timeout;

export function CountDown(){
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

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
    }

    return(
        <div>
            <div className={style.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    type="button"
                    className={style.countDownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                { isActive ? (
                        <button
                            type="button"
                            className={`${style.countDownButton} ${style.countDownButtonActive}`}
                            onClick={resetCountDownButton}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={style.countDownButton}
                            onClick={startCountDownButton}>
                            Iníciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    )
}