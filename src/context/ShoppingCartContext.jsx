import { useContext, createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { commerce } from "../lib/commerce";

const notify = () => toast.success('Added to cart')

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState({})
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }
    useEffect(()=>{
        fetchCart()
    }, [])
    const handleOpenAndCloseCart = () => setIsOpen(prev=>!prev);
    const handleAddToCart = async (pId, quantity) => {
        const item = await commerce.cart.add(pId, quantity)
        setCart(item.cart);
        notify()
    }
    const handleClearItems = async () => {
        await commerce.cart.empty()
        setCart({});
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                handleOpenAndCloseCart,
                handleAddToCart,
                handleClearItems,
                cart,
                isOpen,
            }}
        >
            { children }
        </ShoppingCartContext.Provider>
    )
}