import React, { useRef} from 'react'
import { useFormHook } from '../hooks/useFormHook';
import * as emailjs from '@emailjs/browser';
import { HouseSVG } from './iconsComponents/HouseSVG';
import { EmailSVG } from './iconsComponents/EmailSVG';
import { PhoneSVG } from './iconsComponents/PhoneSVG';


export const FormContact = () => {

    const form = useRef();

    const [formValues, handledInputChange] = useFormHook(
        {
            name: '',
            service_name: '',
            phone: '',
            email: '',
            mensaj: '',
        }
    );

    //Desestructuración
    const { name, service_name, phone, email, mensaj } = formValues;

    let buttonDisable = null
    if ((name.trim().length >= 3) &&
        (email.trim().length > 10) &&
        (phone.trim().length > 7 &&
            phone.trim().length < 9) &&
        (mensaj.trim().length > 10)) {
        buttonDisable = false;

    } else {
        buttonDisable = true;
    }

    const handleSendEmail = (e) => {

        e.preventDefault();
        // console.log(name,phone, email);

        // emailjs
        //     .sendForm(
        //         "service_cleck5g",
        //         "template_bsg3u04",
        //         form.current,
        //         "user_3ZTojlh3MB9mlZnKlN8tJ"
        //     ).then()
        //     .catch();


        //     name= '';
        //     service_name= '';
        //     phone='';
        //     email='';
        //     mensaj='';

    }
    
    return (
        <>
            <div className="container email-contact-container">
                <div className="row">
                    <div className="col-md-6 email-form-1">
                        <h3>Escríbanos</h3>
                        <form ref={form} className="mt-5" onSubmit={handleSendEmail}>
                            <div>
                                <label className="form-label">Nombre completo</label>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name="name"
                                    onChange={handledInputChange}
                                    className={`form-control`}
                                    id="inputName"
                                    value={name}
                                ></input>
                            </div>

                            <div className="mt-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    placeholder="Correo"
                                    name="email"
                                    className={`form-control`}
                                    onChange={handledInputChange}
                                    value={email}
                                ></input>
                                <span className="text-white badge bg-secondary email_text">Ej: ejemplo@dominio.com</span>
                            </div>
                            <div className="mt-3">
                                <label className="form-label">Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    onChange={handledInputChange}
                                    value={phone}
                                    placeholder="Telefono"
                                    onKeyPress={<span className="text-white badge bg-secondary email_text">Ej: ########</span>}
                                ></input>
                                
                            </div>

                            <div className="mt-3">
                                <label className="form-label">Escriba su mensaje</label>
                                <textarea className="form-control"
                                    rows="3"
                                    name="mensaj"
                                    onChange={handledInputChange}
                                    value={mensaj}

                                ></textarea>
                            </div>
                            <div className="mt-5 d-flex justify-content-center">
                                <button type="submit"
                                    disabled={buttonDisable}
                                    className="btn btn-primary btnSubmit"
                                >Sign in</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 contact-form-2">
                        <h3>Contacto</h3>
                        <form>
                            <div className="pt-5">
                                <div className="mt-5">
                                    <HouseSVG />
                                    <label className="form-label text-white ms-3">San José, 100 este del Museo de los niños</label>

                                </div>
                                <div className="mt-5">
                                    <EmailSVG />
                                    <label className="form-label text-white ms-3">SaludIntegrativa@gmail.com</label>

                                </div>
                                <div className="mt-5" >
                                    <PhoneSVG />
                                    <label className="form-label text-white ms-3">2575-1010</label>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
