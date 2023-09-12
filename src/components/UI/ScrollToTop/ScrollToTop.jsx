import React, {useState, useEffect} from 'react';
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
        let prevScrollY = 0;

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;

            if (currentScrollY > 200 && currentScrollY < prevScrollY) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            prevScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            disabled={!isVisible}
            className={`${
                isVisible ? 'opacity-100 right-8' : 'opacity-0 right-0'
            } fixed z-40 bottom-8  bg-indigo-700 hover:bg-indigo-900 text-white px-3.5 py-2 rounded-full transition-all duration-300`}
        >
            <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}}/>
        </button>
    );
};

export default ScrollToTopButton;