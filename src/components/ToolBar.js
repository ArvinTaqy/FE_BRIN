import React from "react";
import { useEffect } from "react";

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
    
    useEffect(() => {
        const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');
        if (toggleSidebarBtn) {
          toggleSidebarBtn.addEventListener('click', toggleSidebar);
        }
    
        return () => {
          if (toggleSidebarBtn) {
            toggleSidebarBtn.removeEventListener('click', toggleSidebar);
          }
        };
      }, []);
    
      const toggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
      }  

    return (
        <div>
        <header className="header">
        <div className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
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
                    <a className="nav-link " href='/'>
                    <i className="bi bi-ui-radios-grid"></i>
                    <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/PerangkatEWS">
                    <i className="bi-cpu"></i>
                    <span>Perangkat EWS</span>
                    </a>
                </li>

                <li className="nav-heading">___________________________________</li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="Profile">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="FAQ">
                    <i className="bi bi-question-circle"></i>
                    <span>F.A.Q</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="Contact">
                    <i className="bi bi-person-lines-fill"></i>
                    <span>Contact</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href='Register' className="nav-link collapsed">
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

        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                    </ol>
                </nav>
            </div>

            <section className="section Dashboard">
                <div className="row">
                <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
                        <div className="card-body">
                            <h5 className="card-title">Selamat Datang <span> | Kamu!</span></h5>
                            <div className="text-muted small pt-2 ps-1">
                                <span>Penjelasan Aplikasi</span>
                            </div> 
                        </div>

                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                    <div className="card info-card customers-card">
                        <div className="card-body">
                            <h5 className="card-title">Selamat Datang <span> | Kamu!</span></h5>
                            <div className="text-muted small pt-2 ps-1">
                                <span>Penjelasan Aplikasi</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>

        </main>
        
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