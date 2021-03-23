import Nav from "./Nav";
import Footer from "./Footer";

export default function Container({ children, main }) {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center mx-auto px-6 max-w-6xl">
        {children}
      </div>
      <Footer />
    </>
  );
}
