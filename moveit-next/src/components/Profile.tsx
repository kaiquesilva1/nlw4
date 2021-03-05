import style from '../style/components/Profile.module.css'
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengesContext";
export function Profile() {
    const { level } = useContext(ChallengesContext)

    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/kaiquesilva1.png" alt="kaique silva"/>
            <div>
                <strong>Kaique Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}</p>
            </div>
        </div>
    )
}