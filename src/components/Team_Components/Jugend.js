import classes from "./Jugend.module.css"

const Jugend = (props) => {

    return <div className={classes.teamContainer}>
        <div className={classes.teamImageContainer}>
            <img src={props.teamURL}/>
        </div>
        <div className={classes.teamInfo}>
            <h2>{props.name}</h2>
            <p>{props.info}</p>
        </div>
        <div className={classes.divide}></div>
        <div className={classes.coachContainer}>
            <div className={classes.coachContact}>
                <div>{props.trainer_name}</div>
                <div>{props.trainer_mail}</div>
                <div>{props.trainer_phone}</div>
            </div>
            <div className={classes.coachImage}>
                <img src={props.trainerURL}/>
            </div>
        </div>
    </div>
}

export default Jugend