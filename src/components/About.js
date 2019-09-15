import React from 'react';

import Contact from './Contact';
import References from './References';
import './About.css'


const About = () => {
    return (
        <section className="about">
            <h1>O mnie</h1>
            <p>
                Jestem full-stack developerem zajmującym się tworzeniem aplikacji webowych w technologiach <span>Python</span> oraz <span>Javascript</span>. W swoich projektach wykorzystuję głównie frameworki <span>Django</span>, <span>Django REST Framework</span> oraz <span>ReactJs</span>.
            </p>
            <Contact />
            <References />
        </section>
    )
}

export default About;