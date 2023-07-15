import React from 'react'
//Importar CSS desse component
import './css/Navbar.css';
//Importar Imagem
import logo from './img/logo.png';
import Icon from '@mdi/react';
import { mdiAccountCircle, mdiCompass, mdiHeart, mdiWeb, mdiMenu } from '@mdi/js';

export default function Navbar() {
    return (
        <div>
            <nav style={{ position: 'fixed', top: 0, zIndex: 999 }} className='nav-topo'>
                <div className='container-airbnb'>
                    <div className='ps-sm-4 col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start align-items-center'>
                        <img className='logo' src={logo} alt="Logo do Site" />
                    </div>
                    <div className='d-none d-sm-flex col-sm-6 lign-items-center align-items-center justify-content-end'>
                        <a href="#" className='link-especial'>Seja um anfitrião</a>
                        <a href="#" className='icon-nav mx-2'><Icon path={mdiWeb} size={1} color="black" /></a>
                        <div className="dropdown mx-3">
                            <a className="button-login dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Icon className='fs-5 ps-2 me-1' path={mdiMenu} size={1.1} color="gray" />
                                <Icon className='fs-2 pe-2' path={mdiAccountCircle} size={1.7} color="gray" />
                                <span className="position-absolute top-0 end-0 badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
                            </a>

                            <ul style={{ borderRadius: '15px' }} className="dropdown-menu mt-2 py-3 border-0 shadow">
                                <li><a className="fw-bold dropdown-item p-2 px-3" href="#">Cadastre-se</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Entrar</a></li>
                                <li><hr className='dropdown-divider' /></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Hospede em sua acomodação</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Hospede uma experiência</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Ajuda</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
            <nav id="mobile" className='d-sm-none bg-white fixed-bottom d-flex align-items-center justify-content-between'>
                <a href="#" className='d-flex flex-column text-center nav-icon active'>
                    <Icon className='fs-3' path={mdiCompass} size={1} color="black" />
                    <span>Explorar</span>
                </a>
                <a href="#" className='d-flex flex-column text-center nav-icon'>
                    <Icon className='fs-3' path={mdiHeart} size={1} color="black" />
                    <span>Favoritos</span>
                </a>
                <a href="#" className='d-flex flex-column text-center nav-icon'>
                    <Icon className='fs-3' path={mdiAccountCircle} size={1} color="black" />
                    <span>Usuário</span>
                </a>
            </nav>
        </div >
    )
}
