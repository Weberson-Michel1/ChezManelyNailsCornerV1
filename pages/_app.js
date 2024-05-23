import Navbar from '/components/Navbar3';
import React from 'react';
import styles from "../styles/globals.css";
import { AnimatePresence } from 'framer-motion';




function MyApp({ Component, pageProps, router }) {
    return (
        <div className=" bg-pink-100 left-0 right-0 ">
        <Navbar/>
        <AnimatePresence initial={false}>
            <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
        </div>
        
    )
}
export default MyApp