import { useState } from "react";
import SideBar from "../components/SideBar";
import ToolBar from "../components/ToolBar";
import { Sidebar } from "react-pro-sidebar";

const RootLayout = ({}) => {
  return (
      <ToolBar />
  );
}

export default RootLayout;

/**
   const [SideBar, setIsSidebar] = useState(false);

  const toggleSideBar = () => {
    setIsSidebar((prevState) => !prevState);
  };

      <div>
      <ToolBar openSideBar={toggleSideBar} />
      <div id="main">
        <header className="mb-3">
          <SideBar SideBar={SideBar}/>
          <a href="javascript:;" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>
        {children}
      </div>
    </div>

 */
/**
 * 
    <><header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between"> 
      <div classname="login">
        
      </div>
      </div>
    </header>
    <div id="main">
        <header className="mb-3">
          <SideBar />
          <a href="javascript:;" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>
        {children}
    </div></>
 */