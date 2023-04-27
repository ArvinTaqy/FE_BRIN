import SideBar from "../components/SideBar";

function RootLayout({ children }) {
  return (
    <div id="main">
      <header className="mb-3">
        <SideBar />
        <a href="javascript:;" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>
    {children}
    </div>
  );
}

export default RootLayout;