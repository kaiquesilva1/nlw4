import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile"
import {CompletedChallenges} from "../components/CompletedChallenges";
import {CountDown} from "../components/CountDown";

import Head from "next/head";

import style from '../style/pages/Home.module.css'

export default function Home() {
  return (
      <div className={style.container}>
          <Head>
              <title>Início | move.it</title>
          </Head>
        <ExperienceBar />

        <section>
            <div>
                <Profile />
                <CompletedChallenges />
                <CountDown />
            </div>
            <div></div>
        </section>
      </div>
  )
}
