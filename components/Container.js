import Nav from "./Nav";
import Footer from "./Footer";

export default function Container({ children, main }) {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center px-6">
        {children}
      </div>
      <Footer />
    </>
  );
}
