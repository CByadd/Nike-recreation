import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import '../src/styles/App.css';
import Navbar from './layouts/navbar';
import Home from './pages/home';
import Mens from './pages/mens';
import Womens from './pages/womens';
import Gift from './pages/gift';
import About from './pages/about';

function App() {
    const location = useLocation();

    const pageTransition = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    };

    return (
        <>
            <Navbar />
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/home"
                        element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageTransition}
                            >
                                <Home />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/mens"
                        element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageTransition}
                            >
                                <Mens />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/womens"
                        element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageTransition}
                            >
                                <Womens />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/gift"
                        element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageTransition}
                            >
                                <Gift />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageTransition}
                            >
                                <About />
                            </motion.div>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
