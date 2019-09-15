import React, { Component } from 'react';

import Project from './Project';
import './Portfolio.css';

import fda from '../static/fda.png';
import rtbg from '../static/rtbg.png';
import cc from '../static/cc.png';


const apps = {
    app1: {
        name: 'Face detection app',
        content: 'Aplikacja, której zadaniem jest wykrywanie twarzy ze zdjęć. Utworzony interfejs umożliwia użytkownikowi przesyłanie zdjęć, wyświetlanie oraz blurowanie wykrytych twarzy.',
        image: fda,
        frontend: ['reactjs', 'testing library'],
        backend: ['django', 'django REST framework', 'openCV'],
        demo: 'https://emerengg.github.io/face-detection-app/',
        github: 'https://github.com/emerengg/face-detection-app',
        isSelected: true
    },
    app2: {
        name: 'Reaction time based game',
        content: 'Gra oparta na czasie reakcji, polegająca na zdobyciu jak największej ilości punktów, mieszcząc się w wyznaczonym limicie czasu. Dodatkowo, udostępnia funkcjonalności pozwalające na zapis uzyskanego wyniku oraz wyświetlanie drabinki z najlepszymi wynikami uzyskanymi przez innych graczy.',
        image: rtbg,
        frontend: ['reactjs', 'testing library'],
        backend: ['django', 'django REST framework'],
        demo: 'https://emerengg.github.io/reaction-time-based-game/',
        github: 'https://github.com/emerengg/reaction-time-based-game',
        isSelected: false
    },
    app3: {
        name: 'Currency calculator',
        content: 'Aplikacja pozwalająca na przeliczenie wartości walut według kursów pobieranych z exchangeratesapi.io, ponadto udostępniająca możliwość prześledzenia historii kursów wybranych walut za pomocą wykresów Chart.js.',
        image: cc,
        frontend: ['reactjs', 'chartjs', 'testing library'],
        backend: [],
        demo: 'https://emerengg.github.io/currency-calculator/',
        github: 'https://github.com/emerengg/currency-calculator',
        isSelected: false
    },
}


class Portfolio extends Component {
    constructor(props) {
        super(props);
        const selectedApp = apps.app1;
        this.state = { 
            apps: apps,
            selectedApp,
        }
    }


    liClick = (name) => {
        const { apps } = this.state;
        const selectedApp = Object.values(apps).find(app => app.name === name)
        const newApps = Object.values(apps).map(app => {
            if(app.name === selectedApp.name){
                app.isSelected = true;
            }else {
                app.isSelected = false;
            }
            return app
        })

        // fadeout tranisiton = 100ms;
        const { app } = this.refs;
        app.classList.add('fadeOut');

        setTimeout(() => {
            this.setState({
                apps: newApps,
                selectedApp
            })
            
            app.classList.remove('fadeOut');
            app.classList.add('fadeIn');
        }, 250);
        app.classList.remove('fadeIn');
    }

    render() { 
        const { apps } = this.state;
        return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="projects"> 
                {Object.values(apps).map((app, index) => {
                    return (<Project 
                        key={index}
                        name={app.name} 
                        content={app.content} 
                        image={app.image} 
                        frontend={app.frontend} 
                        backend={app.backend}
                        demo={app.demo}
                        github={app.github}
                    />)
                })}
            </div>
          </section>
        );
    }
}
 
export default Portfolio;