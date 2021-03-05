import style from '../style/components/ChallengeBox.module.css'
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengesContext";
import {CountDownContext} from "../contexts/CountDownContext";

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountDownButton} = useContext(CountDownContext)

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountDownButton();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountDownButton();
    }

    return(
        <div className={style.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={style.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={style.challengeFailedButton}
                            onClick={handleChallengeFailed}>
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={style.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) :(
                <div className={style.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    )
}