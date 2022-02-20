// import React from 'react'

export const SaludIntegrativaApp = () => {
  return (
    <div>
          {/* <!-- SECCION NAVEGACIÓN--> */}
  <nav className="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
    <div className="container">      
      <a href="#" className="navbar-brand">
        <strong>Salud</strong> Integrativa
      </a>

      <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
      data-bs-target="#MenuMain" aria-controls="navbarToggleExternalContent" aria-expanded="false"
      aria-label="Desplegar menú de navegación">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="MenuMain">
      <ul className="navbar-nav ml-auto">
        {/* <li className="nav-item"><a className="nav-link active">Inicio</a></li> */}
        {/* <li className="nav-item"><a className="nav-link">¿Quien soy?</a></li> */}
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
            Proyectos 1
          </a>
          <ul className="dropdown-menu">
            <li><a href="#" className="dropdown-item">Uno</a></li>
            <hr></hr>
            <li><a href="#" className="dropdown-item">Dos</a></li>
            <hr></hr>
            <li><a href="#" className="dropdown-item">Tres</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
            Proyectos 2
          </a>
          <ul className="dropdown-menu">
            <li><a href="#" className="dropdown-item">Uno</a></li>
            <hr></hr>
            <li><a href="#" className="dropdown-item">Dos</a></li>
            <hr></hr>
            <li><a href="#" className="dropdown-item">Tres</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
            Proyectos 3
          </a>
          <ul className="dropdown-menu">
            <li><a href="#" className="dropdown-item">Uno</a></li>
            <hr></hr>
            <li><a href="#" className="dropdown-item">Dos</a></li>
            <hr></hr>
            <li><a href="#" className="dropdown-item">Tres</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* <!-- SECCION QUIEN SOY --> */}
<section className="quien-soy py-4 mt-5">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 text-center">
        {/* <img src="images/desarrollador.svg" alt="Soy el  desarrolador"
        className="img-fluid mb-4 mb-md-0"> */}
      </div>
      <div className="col-12 col-md-6 text-center text-md-left align-self-md-center ">
        <h1 className="display-4 font-weight-bold text-primary">¿Quien soy?</h1> 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nisi adipisci provident eius enim id eos fugit odit facere vitae. Sit sequi praesentium, officiis rerum dicta. Deserunt ipsam officia neque!</p> 
        <a href="#" className="btn btn-primary btn-lg">Leér más</a> 
      </div>
    </div>
  </div>
</section>


{/* <!-- SECCION FILOSOFIA  --> */}
<section className="filosofia py-4 bg-primary text-center text-white">

  <div className="container">
    <div className="row">
      <div className="col-12">
        {/* <img src="images/avatar.png" width="260" height="auto" alt="Avatar de Tomas Mendez" class="img-fluid rounded-circle mb-4"> */}
        <p className="h2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odio amet nulla ad nobis minima doloribus inventore, aspernatur distinctio dicta ipsam fugit suscipit ullam architecto eos molestias placeat rerum facere.</p>
        <p className="h4 font-italic">- Alejandro Corrales</p>
      </div>
    </div>
  </div>
</section>

{/* <!-- SECCION PROYECTOS --> */}
<section className="proyectos py-4">
  <div className="container">
    <h1 className="display-4 font-weight-bold text-center pb-4">Mis proyectos</h1>
    <div className="row text-md-center">
      <article className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
        <div className="card">
          {/* <img class="card-img-top h-100" src="images/proyecto1.png" alt="Proyecto 1"> */}
          <div className="card-body">
            <h5 className="card-title">Proyecto 1</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sit nisi beatae amet blanditiis placeat repellat minima assumenda, animi impedit totam, voluptatum aut nihil alias laboriosam expedita, dolor nam voluptatem.</p>
            <a href="#" className="btn btn-primary">Ver proyecto</a>
          </div>
        </div>
      </article>
      <article className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
        <div className="card">
          {/* <img class="card-img-top h-100" src="images/proyecto2.png" alt="Proyecto 2"> */}
          <div className="card-body">
            <h5 className="card-title">Proyecto 2</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sit nisi beatae amet blanditiis placeat repellat minima assumenda, animi impedit totam, voluptatum aut nihil alias laboriosam expedita, dolor nam voluptatem.</p>
            <a href="#" className="btn btn-primary">Ver proyecto</a>
          </div>
        </div>
      </article>

      <article className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
        <div className="card">
          {/* <img class="card-img-top h-100" src="images/proyecto3.png" alt="Proyecto 3"> */}
          <div className="card-body">
            <h5 className="card-title">Proyecto 3</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sit nisi beatae amet blanditiis placeat repellat minima assumenda, animi impedit totam, voluptatum aut nihil alias laboriosam expedita, dolor nam voluptatem.</p>
            <a href="#" className="btn btn-primary">Ver proyecto</a>
          </div>
        </div>
      </article>
      <article className="col-12 col-md-6 col-lg-3   mb-3 mb-lg-0">
        <div className="card">
          {/* <img class="card-img-top h-100" src="images/proyecto4.png" alt="Proyecto 4"> */}
          <div className="card-body">
            <h5 className="card-title">Proyecto 4</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sit nisi beatae amet blanditiis placeat repellat minima assumenda, animi impedit totam, voluptatum aut nihil alias laboriosam expedita, dolor nam voluptatem.</p>
            <a href="#" className="btn btn-primary">Ver proyecto</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

 {/* SECCION PIE DE PÁGINA  */}
<footer className="pie-de-pagina text-center text-md-right bg-dark text-white">
  <div className="container">
    <p className="m-0 py-3">Copyright © 2022. Todos los derechos reservados. </p>
  </div>
</footer>

    </div>
  )
}
