import React, { useContext, useEffect, useRef } from "react";
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GameContext } from '../../contexts/GamesContext';
import { CartContainer } from "./style";

export default function Cart() {
    const { cart, onAddToCart, onRemoveOfCart } = useContext(GameContext);
    const total = useRef(0);

    useEffect(() => {
        total.current = cart.reduce((acc, obj) => {
            return acc += obj.price * obj.units;
        }, 0);
    }, [cart]);

    return (
        <CartContainer>
            <ToastContainer />
            <div className="title"><h1>Carrinho de compras</h1></div>
            <Link to="/">
                <FiArrowLeft className="icon-back" />
            </Link>
            <div className="items">
                <p className="paragraph">Seu(s) item(s) adicionado(s) ao carrinho:</p>
                {cart.map((product, index) => (
                    <React.Fragment key={index}>
                        <h3 className="game-name">{product.name}</h3>
                        <img className="game-image" src={`/images/${product.image}`} alt={product.name} />
                        <p className="game-price"><span className="units">{product.units} - </span>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        <p className="add-remove"><button onClick={() => onRemoveOfCart(product)} className="remove">-</button><button onClick={() => onAddToCart(product)} className="add">+</button></p>
                    </React.Fragment>
                ))}
                <h4 className="total">Total: {total.current.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
            </div>
        </CartContainer>
    );
}