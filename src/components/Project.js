import React from 'react';

import './Project.css';


const Project = ({name, content, image, frontend, backend, demo, github}) => {

    // const app = useRef(null);

    // useEffect(() => {
    //     app.current.classList.add('fadeIn');
    // });

    return (
        <div className="app">
            <div className="img-refs">
                <div className="image">
                    <img src={image} alt="name" />
                </div>
                <div className="references">
                    <a href={demo} className="refs">demo</a>
                    <a href={github} className="refs">github</a>
                </div>
            </div>
            <div className="desc">
                <h3>{name}</h3>
                <p className="content">{content}</p>
                {frontend.length > 0 && <div className="frontend">
                        <h4>Frontend</h4>
                        <p>
                            {frontend.map((tech, index) => <small key={index}>{tech}</small>)}
                        </p>
                    </div>
                }
                {backend.length > 0 && <div className="backend">
                        <h4>Backend</h4>
                        <p>
                            {backend.map((tech, index) => <small key={index}>{tech}</small>)}
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Project;