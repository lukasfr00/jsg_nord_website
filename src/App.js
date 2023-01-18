import classes from "./App.module.css";
import {Route, Routes, Navigate, BrowserRouter as Router} from 'react-router-dom';
import Home from "./pages/Home";
import News from "./pages/News";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import {useEffect, useState} from "react";

function App() {

    const [activeSite, setActiveSite] = useState("startseite")
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [cartElements, setCartElements] = useState(0)

    const addProductToCart = (product) => {
        let cart_temp = []
        for(let i = 0; i < cart.length; i++){
            cart_temp.push(cart[i])
        }
        cart_temp.push(product)

        setCart(cart_temp)
    }

    const deleteProduct = (index) => {
        let cart_temp = []
        if(index == cart.length - 2){
            let last_element = {}
            last_element = cart[cart.length - 1]
            cart_temp = cart.splice(0, index)
            cart_temp.push(last_element)
        } else {
            cart_temp = cart.splice(0, index).concat(cart.splice(index + 1))
        }

        setCart(cart_temp)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartElements(cart.length)
    }, [cart]);

  return (
    <div className={classes.container}>
        <Router>
            <Header cartElements={cartElements} active={activeSite}/>
            <Routes>
                <Route
                    path ="/" exact
                    element={<Navigate to="/startseite" replace />}
                >
                </Route>
                <Route path ="/startseite" exact
                       element={<Home setActive={setActiveSite}/>}
                >
                </Route>
                <Route path ="/neuigkeiten" exact
                       element={<News setActive={setActiveSite}/>}
                >
                </Route>
                <Route path ="/mannschaften" exact
                       element={<Teams setActive={setActiveSite}/>}
                >
                </Route>
                <Route path ="/kontakt" exact
                       element={<Contact setActive={setActiveSite}/>}
                >
                </Route>
                <Route path ="/impressum" exact
                       element={<Imprint setActive={setActiveSite}/>}
                >
                </Route>
                <Route path ="/shop" exact
                       element={<Shop cart={cart} cartElements={cartElements} addToCart={addProductToCart} deleteProduct={deleteProduct} setActive={setActiveSite}/>}
                >
                </Route>
                <Route path ="/einkaufswagen" exact
                       element={<Cart cart={cart} cartElements={cartElements} deleteProduct={deleteProduct} setActive={setActiveSite}/>}
                >
                </Route>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
