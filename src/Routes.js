import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './pages/Cart';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}