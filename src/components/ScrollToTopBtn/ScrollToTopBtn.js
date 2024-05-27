import React, { useState, useEffect } from 'react';
import './ScrollToTopBtn.css'; // Import the CSS file;
import upIcon from '../Assets/up-arrow.png';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && 
                <button onClick={scrollToTop} id="scrollToTopBtn" title="Go to top">
                    <img src={upIcon} alt='upIcon' className='upIcon'></img>
                </button>
            }
        </div>
    );
};

export default ScrollToTopButton;
