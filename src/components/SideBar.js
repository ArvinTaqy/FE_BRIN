import { Link } from 'react-router-dom';
import './SideBar.css'

  
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
                        <li className={`sidebar-item ${"title" === "Databases" ? "active" : ""}`}>
                            <a href='Dashboard' className='sidebar-link'>
                                <i className="bi-speedometer2"></i>
                                <span>Perangkat</span>
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