import React, { useRef } from 'react';

function ScrollToSection() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div>
                <button onClick={() => scrollToSection(homeRef)}>Go to Home</button>
                <button onClick={() => scrollToSection(aboutRef)}>Go to About</button>
                <button onClick={() => scrollToSection(servicesRef)}>Go to Services</button>
            </div>

            <div ref={homeRef} style={{ height: '100vh', backgroundColor: 'blue' }}>
                <h2>Home Section</h2>
            </div>

            <div ref={aboutRef} style={{ height: '100vh', backgroundColor: 'yellow' }}>
                <h2>About Section</h2>
            </div>

            <div ref={servicesRef} style={{ height: '100vh', backgroundColor: 'red' }}>
                <h2>Services Section</h2>
            </div>
        </div>
    );
}

export default ScrollToSection;
