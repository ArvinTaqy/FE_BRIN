import { Link } from 'react-router-dom';
import React, { useState } from "react";

  
function SideBar() {
    return (
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                                <img 
                                src="/images/logo/Alt_Logo_BRIN.png" alt="Logo"
                                />
                        </div>
                        <div className="toggler">
                            <a href="javascript:;" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle pd-3"></i></a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">Menu</li>
                        <li className={`sidebar-item ${"title" === "Main" ? "active" : ""}`}>
                            <a href='' className='sidebar-link'>
                                <i className="bi-speedometer2"></i>
                                <span>Daftar Perangkat</span>
                            </a>
                        </li>
                        <li className={`sidebar-item ${"title" === "Perangkat A" ? "active" : ""}`}>
                            <a href='PerangkatA' className='sidebar-link'>
                                <i className="bi-whatsapp"></i>
                                <span>Perangkat A</span>
                            </a>
                        </li>
                        <li className={`sidebar-item ${"title" === "Perangkat B" ? "active" : ""}`}>
                            <a href='PerangkatB' className='sidebar-link'>
                                <i className="bi-linkedin"></i>
                                <span>Perangkat B</span>
                            </a>
                        </li>
                        <li className={`sidebar-item ${"title" === "Perangkat C" ? "active" : ""}`}>
                            <a href='PerangkatC' className='sidebar-link'>
                                <i className="bi-instagram"></i>
                                <span>Perangkat C</span>
                            </a>
                        </li>
                        <li className={`sidebar-item ${"title" === "Perangkat D" ? "active" : ""}`}>
                            <a href='PerangkatD' className='sidebar-link'>
                                <i className="bi-facebook"></i>
                                <span>Perangkat D</span>
                            </a>
                        </li>
                        <li className={`sidebar-item ${"title" === "Databases" ? "active" : ""}`}>
                            <a href='Add' className='sidebar-link'>
                                <i className="bi-table"></i>
                                <span>Tambahkan Perangkat</span>
                            </a>
                        </li>
                        <button className="sidebar-toggler btn x" title='close sidebar'><i data-feather="X"></i></button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;