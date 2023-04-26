import SideBar from "../components/SideBar";

function RootLayout({ children }) {
  return (
    <div className="flex gap-5">
      <SideBar />
      <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
    </div>
  );
}

export default RootLayout;