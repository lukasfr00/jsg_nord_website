import classes from "./Cart.module.css"
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Cart = (props) => {

    const [showPaymentInfos, setShowPaymentInfos] = useState(false)


    const togglePaymentInfos = () => {
        setShowPaymentInfos(!showPaymentInfos)
    }

    const paymentInformation = () => {
        if(showPaymentInfos){
            return (
                <div className={classes.paymentInfos}>
                    <div className={classes.paymentInfosText}>
                        Wir bauen auf den persönlichen Kontakt mit jedem, der uns mit dem Kauf von Fanartikeln unterstützt.
                        Daher gibt es bei uns lediglich die Möglichkeit eine Bestellung über diesen Onlineshop auszuführen. Mit den
                        Produkten aus dem Warenkorb und den Kontaktinformationen, die auf der nächsten Seite eingegeben werden,
                        wird uns eine Benachrichtigung geschickt. Dadurch können wir die Bestellung verarbeiten und mit dem Käufer
                        in Kontakt treten. Bezahlung und Produktübergabe werden somit persönlich gemacht, beispielsweise beim Heimspiel
                        der JSG. <br/> <br/> Vielen Dank für das Verständnis!
                    </div>
                </div>
            )
        } else {
            return <></>
        }
    }

    const products = () => {
        if(props.cart.length != 0){
            return (
                <div className={classes.products}>
                    {props.cart.map((product, index)=> {
                        return (
                            <div key={index} className={classes.product}>
                                <div className={classes.image}>
                                    <img src={product[0].product_image}/>
                                </div>
                                <div className={classes.productInfos}>
                                    <div className={classes.productText}>
                                        <h3>{product[0].product_name}</h3>
                                        <p>{product[0].product_size}</p>
                                        <p>{product[0].product_color}</p>
                                        <p><b>{product[0].product_price} €</b></p>
                                    </div>
                                    <button onClick={()=>{props.deleteProduct(index)}} className={classes.deleteItem}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return <></>
        }
    }

    return <div className={classes.content}>
        <h2>Dein Einkaufswagen</h2>
        <p>Hier siehst du die Produkte aus deinem Einkaufswagen aufgelistet. Durch einen Klick auf 'Weiter' gelangst du zum Bestellformular.</p>
        <button className={classes.paymentButton} onClick={togglePaymentInfos}>
            Warum benötigen wir keine Zahlungsmittel?
            {!showPaymentInfos && <i className="fa-solid fa-caret-right"></i>}
            {showPaymentInfos && <i className="fa-solid fa-caret-down"></i>}
        </button>
        {paymentInformation()}
        {props.cart.length == 0 && <div className={classes.cartEmpty}>Einkaufswagen ist leer</div>}
        {products()}
        <div className={classes.buttons}>
            <Link className={classes.backButton} to='/shop'><p>Zurück</p></Link>
            <button className={classes.proceedButton}>Weiter</button>
        </div>
    </div>
}

export default Cart