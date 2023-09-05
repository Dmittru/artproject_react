import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`${
                isVisible ? 'block' : 'hidden'
            } fixed bottom-8 right-8 z-50 bg-indigo-700 hover:bg-indigo-900 text-white px-3.5 py-2 rounded-full transition-all duration-300`}
        >
            <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} />
        </button>
    );
};

export default ScrollToTopButton;