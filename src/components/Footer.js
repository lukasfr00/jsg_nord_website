import classes from "./Footer.module.css"

const Footer = () => {
    return <div className={classes.footer}>
        <div className={classes.socials}>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
        </div>
        <div className={classes.content}>
            <div>Impressum</div>
            <div>Kontakt</div>
        </div>
    </div>
}

export default Footer