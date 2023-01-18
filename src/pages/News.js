import classes from "./News.module.css"
import {useEffect} from "react";
import logo from "../images/logos/jsg.png";
import SingleNews from "../components/Home_Components/SingleNews";

const News = (props) => {

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

    const content = () => {
        return (
            <div className={classes.sectionOne}>
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
    }

    useEffect(() => {
        props.setActive("neuigkeiten")
    },[])

    return <div className={classes.container}>
        <h2>Neuigkeiten</h2>
        {content()}
    </div>
}

export default News;