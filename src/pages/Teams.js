import classes from "./Teams.module.css";
import {useEffect, useState} from "react";
import React from 'react'
import Jugend from "../components/Team_Components/Jugend";

const DUMMY_TEAMS = [
    {
        jugend: "ajugend",
        team_name: "A-Jugend",
        team_fotoURL: "https://cdn.prod.www.spiegel.de/images/ff86ee56-fe7a-4ca6-ae9f-3c2e36b94960_w1600_r1.4534810126582278_fpx45_fpy42.jpg",
        infotext: "Unsere A-Jugend ist ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        trainer: "Max Mustermann",
        trainer_mail: "trainerA@jsg-nord.de",
        trainer_telefon: "017212345678",
        trainer_fotoURL: "https://www.fcp.at/sites/default/files/2019-05/person_0.jpg"
    },
    {
        jugend: "bjugend",
        team_name: "B-Jugend",
        team_fotoURL: "https://www.dfb.de/fileadmin/_processed_/201706/csm_139338-Mannschaftsfoto-Confed-Cup_7fca05c8ba.jpg",
        infotext: "Unsere B-Jugend ist ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        trainer: "Max Mustermann",
        trainer_mail: "trainerB@jsg-nord.de",
        trainer_telefon: "0175345345678",
        trainer_fotoURL: "https://www.fcp.at/sites/default/files/2019-05/person_0.jpg"
    },
    {
        jugend: "cjugend",
        team_name: "C-Jugend",
        team_fotoURL: "https://www.tz.de/bilder/2021/04/07/90404106/25496616-wm-qualifikation-europa-deutschland-island-spieltag-in-der-schauinsland-reisen-arena-2ke9.jpg",
        infotext: "Unsere C-Jugend ist ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        trainer: "Max Mustermann",
        trainer_mail: "trainerC@jsg-nord.de",
        trainer_telefon: "017212353533",
        trainer_fotoURL: "https://www.fcp.at/sites/default/files/2019-05/person_0.jpg"
    },
    {
        jugend: "djugend",
        team_name: "D-Jugend",
        team_fotoURL: "https://cdn.prod.www.spiegel.de/images/ff86ee56-fe7a-4ca6-ae9f-3c2e36b94960_w1600_r1.4534810126582278_fpx45_fpy42.jpg",
        infotext: "Unsere D-Jugend ist ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        trainer: "Max Mustermann",
        trainer_mail: "trainerD@jsg-nord.de",
        trainer_telefon: "017213335678",
        trainer_fotoURL: "https://www.fcp.at/sites/default/files/2019-05/person_0.jpg"
    },
    {
        jugend: "ejugend",
        team_name: "E-Jugend",
        team_fotoURL: "https://cdn.prod.www.spiegel.de/images/ff86ee56-fe7a-4ca6-ae9f-3c2e36b94960_w1600_r1.4534810126582278_fpx45_fpy42.jpg",
        infotext: "Unsere E-Jugend ist ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        trainer: "Max Mustermann",
        trainer_mail: "trainerE@jsg-nord.de",
        trainer_telefon: "017212345678",
        trainer_fotoURL: "https://www.fcp.at/sites/default/files/2019-05/person_0.jpg"
    }
]

const Teams = (props) => {

    const [team, setTeam] = useState("Team auswählen")
    const [showTeams, setShowTeams] = useState(false)

    const selectHandler = (selected) => {
        setTeam(selected)
        setShowTeams(false)
        return null
    }

    const toggleOptions = () => {
        setShowTeams(!showTeams)
    }

    const content = () => {

        let teamSelected = {}
        for(let i = 0; i < DUMMY_TEAMS.length; i++){
            if(DUMMY_TEAMS[i].team_name == team){
                teamSelected = DUMMY_TEAMS[i]
            }
        }

        return (
            <Jugend
                jugend={teamSelected.jugend}
                name={teamSelected.team_name}
                teamURL={teamSelected.team_fotoURL}
                info={teamSelected.infotext}
                trainer_name={teamSelected.trainer}
                trainer_mail={teamSelected.trainer_mail}
                trainer_phone={teamSelected.trainer_telefon}
                trainerURL={teamSelected.trainer_fotoURL}
                windowSize={props.windowSize}
            />
        )
    }

    useEffect(() => {
        props.setActive("mannschaften")
    },[])

    return <div className={classes.container}>
        <h2>Mannschaften</h2>
        <div className={classes.selectTeam}>
            <button onClick={toggleOptions} className={classes.teamLabel}>
                <div className={classes.teamSelected}>{team}</div>
                {!showTeams && <i className="fa-solid fa-caret-right"></i>}
                {showTeams && <i className="fa-solid fa-caret-down"></i>}
            </button>
            {showTeams &&  <div className={classes.options}>
                {DUMMY_TEAMS.map((t, i) => {
                    return (
                        <button
                            className={classes.teamOption}
                            onClick={() => {
                                selectHandler(t.team_name)
                            }}
                            key={i}
                        >{t.team_name}</button>
                    )
                })}
            </div>}
        </div>
        {content()}
    </div>
}

export default Teams;