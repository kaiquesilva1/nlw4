import style from '../style/components/CompletedChallenges.module.css'
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengesContext";

export function CompletedChallenges(){
    const { challengesCompleted } = useContext(ChallengesContext)

    return(
        <div className={style.CompletedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}