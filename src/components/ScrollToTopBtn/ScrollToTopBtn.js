import React, { useState, useEffect } from 'react';
import './ScrollToTopBtn.css'; // Import the CSS file;
import upIcon from '../Assets/up-arrow.png';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        const mainContent = document.querySelector('.main-content');
        const scrollTop = mainContent ? mainContent.scrollTop : window.pageYOffset;

        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const mainContent = document.querySelector('.main-content');

        if (mainContent) {
            mainContent.addEventListener('scroll', toggleVisibility);
        }
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            if (mainContent) {
                mainContent.removeEventListener('scroll', toggleVisibility);
            }
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
