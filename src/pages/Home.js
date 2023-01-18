import classes from "./Home.module.css"
import title from "../images/title.jpg"
import logo from "../images/logos/jsg.png"
import logoPLO from "../images/logos/plockhorst.png"
import logoEDD from "../images/logos/eddesse.png"
import logoDED from "../images/logos/mtv.png"
import logoELT from "../images/logos/eltze.png"
import {useEffect, useState} from "react";
import SingleNews from "../components/Home_Components/SingleNews";
import Date from "../components/Home_Components/Date";

const Home = (props) => {

    const [showNews, setShowNews] = useState(true)
    const [showDates, setShowDates] = useState(false)
    const [activeClub, setActiveClub] = useState("plockhorst")

    const DUMMY_NEWS = [
        {
            id: 1,
            title: 'Testneuigkeit Eins!',
            text:'Dies ist die erste Testneuigkeit. Dies ist die erste Testneuigkeit. Dies ist die erste Testneuigkeit.Dies ist die erste Testneuigkeit',
            img_url: 'https://www.allesbeste.de/wp-content/uploads/2021/08/2022050fussbaelle-mai2022-aufmacher-2240x1260.jpg'
        },
        {
            id: 2,
            title: 'Testneuigkeit Zwei!',
            text:'Dies ist die zweite Testneuigkeit. Dies ist die zweite Testneuigkeit. Dies ist die zweite Testneuigkeit. Dies ist die zweite Testneuigkeit',
            img_url: 'https://img.zeit.de/news/2023-01/07/bericht-ronaldo-club-offenbar-an-marco-reus-interessiert-image-group/wide__980x551'
        },
        {
            id: 3,
            title: 'Testneuigkeit Drei!',
            text:'Dies ist die dritte Testneuigkeit. Dies ist die dritte Testneuigkeit. Dies ist die dritte Testneuigkeit. Dies ist die dritte Testneuigkeit',
            img_url: 'https://www.dfb.de/fileadmin/_processed_/201406/csm_26979-aufmacher_motivationsspiele_5028d3d245.jpg'
        },
        {
            id: 4,
            title: 'Testneuigkeit Vier!',
            text:'Dies ist die vierte Testneuigkeit. Dies ist die vierte Testneuigkeit. Dies ist die vierte Testneuigkeit. Dies ist die vierte Testneuigkeit',
            img_url: ''
        }
    ]

    const DUMMY_DATES = [
        {id: 1, date: '21.02.2023', title: 'Rückrundenstart', text:'Dies ist die erste Testneuigkeit'},
        {id: 2, date: '13.04.2023', title: 'Letztes Saisonspiel', text:'Dies ist die zweite Testneuigkeit'},
        {id: 3, date: '16.09.2023', title: 'Saisonstart', text:'Dies ist die dritte Testneuigkeit'}
    ]

    //------------------
    //Content One: News and Dates

    const switchToNews = () => {
        setShowDates(false)
        setShowNews(true)
    }

    const switchToDates = () => {
        setShowDates(true)
        setShowNews(false)
    }

    const contentOne = () => {
        if(showNews) {
            return (
                <div className={classes.sectionOne}>
                    <div className={classes.toggleButtons}>
                        <div className={classes.activeButtonClass}>
                            <button className={classes.activeButton}>Neuigkeiten</button>
                            <div className={classes.triangle}></div>
                        </div>
                        <button className={classes.inactiveButton} onClick={switchToDates}>Termine</button>
                    </div>
                    <div className={classes.headline}>
                        <img src={logo}/>
                        <h2>JSG Neuigkeiten</h2>
                    </div>
                    <div className={classes.newsBoxes}>
                        {
                            DUMMY_NEWS.map((singleNews, index)=> {
                                return <SingleNews
                                    id={singleNews.id}
                                    title={singleNews.title}
                                    text={singleNews.text}
                                    imageURL={singleNews.img_url}
                                    key={singleNews.id}
                                />
                            })
                        }
                    </div>
                </div>
            )
        } else if (showDates) {
            return (
                <div className={classes.sectionOne}>
                    <div className={classes.toggleButtons}>
                        <button className={classes.inactiveButton} onClick={switchToNews}>Neuigkeiten</button>
                        <div className={classes.activeButtonClass}>
                            <button className={classes.activeButton}>Termine</button>
                            <div className={classes.triangle}></div>
                        </div>
                    </div>
                    <div className={classes.headline}>
                        <img src={logo}/>
                        <h2>JSG Termine</h2>
                    </div>
                    <div className={classes.dateBoxes}>
                        {
                            DUMMY_DATES.map((date, index)=> {
                                return <Date
                                    id={date.id}
                                    date={date.date}
                                    title={date.title}
                                    text={date.text}
                                    key={date.id}
                                />
                            })
                        }
                    </div>
                </div>
            )
        }
    }

    //------------------
    //Content Two: Clubs and Clubinfos

    const plockhorst = () => {
        setActiveClub("plockhorst")
    }

    const eddesse = () => {
        setActiveClub("eddesse")
    }

    const dedenhausen = () => {
        setActiveClub("dedenhausen")
    }

    const eltze = () => {
        setActiveClub("eltze")
    }

    useEffect(() => {
        props.setActive("startseite")
    },[])

    return <div className={classes.container}>
        <div className={classes.titleContainer}>
            <img src={title}/>
            <div className={classes.overlay}></div>
            <div className={classes.title}>Willkommen bei der JSG!</div>
        </div>
        <div className={classes.content}>
            {contentOne()}
            <hr/>
            <div className={classes.sectionTwo}>
                <h2>Die Vereine</h2>
                <div className={classes.clubs}>
                    <div className={classes.club}>
                        <div className={classes.clubLogo}>
                            <img src={logoPLO} onClick={plockhorst}/>
                        </div>
                        <div className={classes.clubInfo}>
                            <h3>SSV Plockhorst</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                            <a href={"http://www.ssvplockhorst.de/"} target={"_blank"}><button>Zum SSV Plockhorst</button></a>
                        </div>
                    </div>
                    <div className={classes.club}>
                        <div className={classes.clubLogo}>
                            <img src={logoEDD} onClick={eddesse}/>
                        </div>
                        <div className={classes.clubInfo}>
                            <h3>MTV Eddesse</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                            <a href={"https://www.mtveddesse.de/"} target={"_blank"}><button>Zum MTV Eddesse</button></a>
                        </div>
                    </div>
                    <div className={classes.club}>
                        <div className={classes.clubLogo}>
                            <img src={logoDED} onClick={dedenhausen}/>
                        </div>
                        <div className={classes.clubInfo}>
                            <h3>MTV Dedenhausen</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                            <a href={"http://cms.dedenhausen.de/mtv/"} target={"_blank"}><button>Zum MTV Dedenhausen</button></a>
                        </div>
                    </div>
                    <div className={classes.club}>
                        <div className={classes.clubLogo}>
                            <img src={logoELT} onClick={eltze}/>
                        </div>
                        <div className={classes.clubInfo}>
                            <h3>MTV Eltze</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                            <a href={"https://mtv-eltze.de/"} target={"_blank"}><button>Zum MTV Eltze</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home;