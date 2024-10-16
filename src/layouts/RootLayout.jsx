import NavBarMenu from "./NavBarMenu";
import Footer from "./Footer";

function RootLayout({ children }) {
  return (
    <>
      <NavBarMenu></NavBarMenu>

      <div>{children}</div>

      <Footer></Footer>
    </>
  );
}

export default RootLayout;
