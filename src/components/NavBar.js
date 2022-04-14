import React from 'react'

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-navBar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand nav-img ps-5 m-0" href="#">
              <img src= {require('../assets/Logo_Imagen_Interna_Medio.png')}></img>
          </a>
          <a className="navbar-brand nav-letters ps-5" href="#">
              <img src= {require('../assets/Logo_Letras.png')}></img>
          </a>
          <button className="navbar-toggler me-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h3 className="offcanvas-title mb-0" id="offcanvasNavbarLabel"><b>Servicios</b></h3>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr/>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Coaching (Sesiones individuales o grupales)
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="#">Inteligencia Emocional</a></li>
                    <li><a className="dropdown-item" href="#">Promoción de Hábitos Saludables</a></li>
                    <li><a className="dropdown-item" href="#">Neurolingüística</a></li>
                    <li><a className="dropdown-item" href="#">Neuroliderazgo</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Enfermería
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="#">Autocuidado</a></li>
                    <li><a className="dropdown-item" href="#">Curaciones</a></li>
                    <li><a className="dropdown-item" href="#">Procedimientos (Calificados)</a></li>
                    <li><a className="dropdown-item" href="#">Promoción de la Salud</a></li>
                    <li><a className="dropdown-item" href="#">Enfermedades Crónicas</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Terapia Física
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="#">Ergonomía</a></li>
                    <li><a className="dropdown-item" href="#">Análisis de Puesto</a></li>
                    <li><a className="dropdown-item" href="#">Ejercicios Funcionales para Lesiones</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación en Salud Física</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación de Enfermedades Musculoesqueléticas</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación en Promoción de la Salud</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación de Autocuidado</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación de Rehabilitación</a></li>
                    <li><a className="dropdown-item" href="#">Organización de Eventos Deportivos</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Nutrición
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="#">Servicios Individuales o Grupales</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación de Enfermedades Crónicas</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación Dieta keto</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación de Estilos de Vida Saludables</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación Productividad Laboral</a></li>
                    <li><a className="dropdown-item" href="#">Disminución de Ausentismo Laboral </a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Psicología
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                  <li><a className="dropdown-item" href="#">Sesiones Individuales o Grupales</a></li>
                    <li><a className="dropdown-item" href="#">Prevención de Suicidio</a></li>
                    <li><a className="dropdown-item" href="#">Transtornos de Ansiedad</a></li>
                    <li><a className="dropdown-item" href="#">Adicciones</a></li>
                    <li><a className="dropdown-item" href="#">Manejo de Estrés en Niños</a></li>
                    <li><a className="dropdown-item" href="#">Manejo de Estrés en Pandemia </a></li>
                    <li><a className="dropdown-item" href="#">Ataques de Pánico </a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Medicina General
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="#">Consulta General</a></li>
                    <li><a className="dropdown-item" href="#">Medicina Mixta</a></li>
                    <li><a className="dropdown-item" href="#">Medicina de Empresa</a></li>
                    <li><a className="dropdown-item" href="#">Valoraciones Pre-empleo</a></li>
                    <li><a className="dropdown-item" href="#">Seguimiento de Adicciones (Doping) </a></li>
                    <li><a className="dropdown-item" href="#">Seguimiento de Enfermedades Crónicas </a></li>
                    <li><a className="dropdown-item" href="#">Asesorías COVID </a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" id="offcanvasNavbarDropdown" role="button" aria-expanded="false">
                    Medicina Laboral
                  </a>
                  
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Emprendedurismo
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                  <li><a className="dropdown-item" href="#">Alfabetización Digital</a></li>
                    <li><a className="dropdown-item" href="#">Redes Sociales</a></li>
                    <li><a className="dropdown-item" href="#">Plataformas para Mejorar su Negocio</a></li>
                    <li><a className="dropdown-item" href="#">Comercialización y Discapacidad</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Salud Ocupacional
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                  <li><a className="dropdown-item" href="#">Planes de Emergencia</a></li>
                    <li><a className="dropdown-item" href="#">Capacitación Brigada</a></li>
                    <li><a className="dropdown-item" href="#">Riesgo Laboral</a></li>
                    <li><a className="dropdown-item" href="#">Señalización</a></li>
                  </ul>
                </li>
                <hr/>
                <li className="nav-item dropdown">
                  <h6 className="offcanvas-title mt-0" id="offcanvasNavbarLabel"><b>Acerca de Nosotros</b></h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
