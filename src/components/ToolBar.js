import React from "react";

const ToolBar = ({}) => {
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
    }
    
    const on = (type, el, listener, all = false) => {
        if (all) {
          select(el, all).forEach(e => e.addEventListener(type, listener))
        } else {
          select(el, all).addEventListener(type, listener)
        }
    } 
    
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }  
    
    if (select('.toggle-sidebar-btn')) {
        on('click', '.toggle-sidebar-btn', function(e) {
          select('body').classList.toggle('toggle-sidebar')
        })
    }  

    return (
        <div>
        <header className="header">
        <div className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a href="ToolBar" className="logo d-flex align-items-center">
                    <img src="/images/logo/BRIN.png" alt=""></img>
                        <span className="d-none d-lg-block">TIM DIKE</span>
                    </a>    
                <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <li className="nav-item dropdown pe-3">

                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <i className="  bi-person-circle"></i>
                                <span className="d-none d-md-block dropdown-toggle ps-2">Profile</span>
                            </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>Profile</h6>
                                <span>Status</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider">
                                </hr></li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <i className="bi bi-person"></i>
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider">
                                </hr></li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <i className="bi bi-gear"></i>
                                    <span>Account Settings</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider">
                                </hr></li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <i className="bi bi-question-circle"></i>
                                    <span>Need Help?</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider">
                                </hr></li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                </ul>
            </nav>
            </div>
        </header>
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <a className="nav-link " href='ToolBar'>
                    <i className="bi-house"></i>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi-cpu"></i><span>Perangkat</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="PerangkatA">
                        <i className="bi bi-circle"></i><span>Pencemaran Udara</span>
                        </a>
                    </li>
                    <li>
                        <a href="PerangkatB">
                        <i className="bi bi-circle"></i><span>Curah Hujan</span>
                        </a>
                    </li>
                    <li>
                        <a href="PerangkatC">
                        <i className="bi bi-circle"></i><span>Kualitas Air</span>
                        </a>
                    </li>
                    <li>
                        <a href="PerangkatD">
                        <i className="bi bi-circle"></i><span>Deteksi Longsor</span>
                        </a>
                    </li>
                    </ul>
                </li>

                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#">
                    <i className="bi bi-question-circle"></i>
                    <span>F.A.Q</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#">
                    <i className="bi bi-person-lines-fill"></i>
                    <span>Contact</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href='#'>
                    <i className="bi bi-card-checklist"></i>
                    <span>Register</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href='Login' className="nav-link collapsed">
                    <i className="bi bi-box-arrow-in-right"></i>
                    <span>Login</span>
                    </a>
                </li>

                </ul>
        </aside>
        
        <footer id="footer" className="footer">
            <div className="copyright">
            &copy; Copyright <strong><span>TIM DIKE 2023</span></strong>. All Rights Reserved
            </div>
        </footer>

        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
        
        )
    }

export default ToolBar

//npm install remixicon --save