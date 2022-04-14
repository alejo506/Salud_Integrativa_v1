// import React from 'react'

import { Carousel_Home } from "./Carousel_Home";
import { FormContact } from "./FormContact";
import { NavBar } from "./NavBar";


export const SaludIntegrativaApp = () => {
  return (
    <div>
      <section className="nav">
      {/* <!-- SECCION NAVEGACIÓN--> */}
      <NavBar />
      </section>


      {/* <!-- SECCION CAROUSEL --> */}
      <section className="home py-4">
       <Carousel_Home />
      </section>


      {/* <!-- SECCION FILOSOFIA  --> */}
      <section className="filosofia py-4 bg-primary text-center text-white">

        <div className="container">
          <div className="row">
            <div className="col-12">
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


      <FormContact/>

      {/* SECCION PIE DE PÁGINA  */}
      <footer className="pie-de-pagina text-center text-md-right bg-dark text-white">
        <div className="container">
          <p className="m-0 py-3">Copyright © 2022. Todos los derechos reservados. </p>
        </div>
      </footer>

    </div>
  )
}
