import React from 'react'

import coaching from '../assets/carrusel_inicio/Coaching.jpg';
import Enfermeria from '../assets/carrusel_inicio/Enfermeria.jpg';
import Mindfulness from '../assets/carrusel_inicio/Mindfulness.jpg';
import Nutricion from '../assets/carrusel_inicio/Nutricion.jpg';
import Psicologia from '../assets/carrusel_inicio/Psicologia.jpg';
import Terapia_Fisica from '../assets/carrusel_inicio/Terapia_Fisica.jpg';

export const Carousel_Home = () => {
    return (
        <div>
            <div id="carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-controls">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carousel" data-bs-slide-to="0" className="active" style={{ backgroundImage: `url(${coaching})` }}></li>
                        <li data-bs-target="#carousel" data-bs-slide-to="1" style={{ backgroundImage: `url(${Enfermeria})` }}></li>
                        <li data-bs-target="#carousel" data-bs-slide-to="2" style={{ backgroundImage: `url(${Mindfulness})` }}></li>
                        <li data-bs-target="#carousel" data-bs-slide-to="3" style={{ backgroundImage: `url(${Nutricion})` }}></li>
                        <li data-bs-target="#carousel" data-bs-slide-to="4" style={{ backgroundImage: `url(${Psicologia})` }}></li>
                        <li data-bs-target="#carousel" data-bs-slide-to="5" style={{ backgroundImage: `url(${Terapia_Fisica})` }}></li>
                    </ol>

                    <a className="carousel-control-prev" role={"button"} href="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </a>
                    <a className="carousel-control-next" role={"button"} href="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </a>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: `url(${coaching})` }}>
                        <div className="container">
                            <h2>Coaching</h2>
                            <p>Sesiones individuales o grupales</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${Enfermeria})` }}>
                        <div className="container">
                            <h2>Enfermer??a</h2>
                            <p>Promoci??n de salud</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${Mindfulness})` }}>
                        <div className="container">
                            <h2>Mindfulness</h2>
                            <p>Pendiente</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${Nutricion})` }}>
                        <div className="container">
                            <h2>Nutrici??n</h2>
                            <p>Sesiones individuales o grupales</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${Psicologia})` }}>
                        <div className="container">
                            <h2>Psicolog??a</h2>
                            <p>Sesiones individuales o grupales</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${Terapia_Fisica})` }}>
                        <div className="container">
                            <h2>Terapia F??sica</h2>
                            <p>Ergonom??a, entre otros</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
