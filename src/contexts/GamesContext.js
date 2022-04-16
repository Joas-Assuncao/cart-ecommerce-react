import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import data from '../products.json';

export const GameContext = createContext({});

export default function GameProvider({ children }) {
    const [gameData,] = useState(data); // percebi que nao valia a pena ter colocado isso aqui, mas tudo bem
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(prevProducts => (
            prevProducts.filter(productCurrent => (
                productCurrent.units >= 1
            ))
        ))
    }, [cart])

    function handleAddToCart(product) {
        const customId = "custom-id-yes";

        toast('Produto adicionado!', {
            position: "top-right",
            autoClose: 300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            toastId: customId,
            progressStyle: { background: '#44f244' },
            style: { color: '#44f244' },
        });

        const productAlreadyAdded = cart.some(
            productCurrent => product.id === productCurrent.id
        )

        if (!productAlreadyAdded) {
            setCart(prevProducts => [...prevProducts, product]);
            return;
        }

        setCart(prevProducts =>
            prevProducts.map(currentProducts =>
                currentProducts.id === product.id
                    ? { ...currentProducts, units: currentProducts.units + 1 }
                    : currentProducts,
            ),
        );
    }

    function handleRemoveOfCart(product) {
        const customId = "custom-id-yes";

        toast('Produto removido!', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            toastId: customId,
            progressStyle: { background: '#e83535' },
            style: { color: '#e83535' },
        });

        const productsHaveMoreOneUnit = cart.filter(
            productCurrent => productCurrent.units > 1
        )

        const productForRemove = productsHaveMoreOneUnit.find((productCurrent) => productCurrent.id === product.id);

        if (!productForRemove) {
            setCart(prevProducts => prevProducts.filter(prevProduct => prevProduct.id !== product.id));
            return;
        }

        setCart(prevProducts => (
            prevProducts.map(prevProduct =>
                prevProduct.id === productForRemove.id
                    ? { ...prevProduct, units: prevProduct.units - 1 }
                    : prevProduct
            )
        ))
    }

    return (
        <GameContext.Provider
            value={{ gameData, cart, onAddToCart: handleAddToCart, onRemoveOfCart: handleRemoveOfCart }}
        >
            {children}
        </GameContext.Provider>
    )
}