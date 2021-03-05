import {useState, useEffect, useContext} from "react";
import style from '../style/components/CountDown.module.css'
import {ChallengesContext} from "../contexts/ChallengesContext";
import {CountDownContext} from "../contexts/CountDownContext";

export function CountDown(){
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDownButton,
        resetCountDownButton
    } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

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