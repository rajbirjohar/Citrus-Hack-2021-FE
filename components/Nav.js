import React, { useState, useEffect } from "react";

import { Link } from "react-scroll";

import { GiTwirlyFlower } from "react-icons/gi";

export default function Navbar({ fixed }) {
  const [mounted, setMounted] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const changeNav = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  useEffect(function mount() {
    window.addEventListener("scroll", changeNav);
    return function unMount() {
      window.removeEventListener("scroll", changeNav);
    };
  });

  return (
    <>
      <nav
        className={`sticky-nav relative flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg  transition duration-300 ease-in-out ${
          scroll ? "bg-red-50" : "bg-white"
        }`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-md font-bold tracking-wider leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-900">
              Citrus Hack FE
            </a>
            <button
              className="text-gray-900 cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiTwirlyFlower />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex justify-center" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="nav-item cursor-pointer">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={0}
                >
                  <a className="px-3 py-2 flex items-center text-md uppercase font-medium tracking-wide leading-wide text-gray-900 hover:opacity-75">
                    <span className="ml-2">Home</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item cursor-pointer">
                <Link
                  activeClass="active"
                  to="intro"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={0}
                >
                  <a className="px-3 py-2 flex items-center text-md uppercase font-medium tracking-wide leading-wide text-gray-900 hover:opacity-75">
                    <span className="ml-2">About</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item cursor-pointer">
                <Link
                  activeClass="active"
                  to="tracks"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={0}
                >
                  <a className="px-3 py-2 pr-6 flex items-center text-md uppercase font-medium tracking-wide leading-wide text-gray-900 hover:opacity-75">
                    <span className="ml-2">Tracks</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item cursor-pointer">
                <Link
                  activeClass="active"
                  to="sponsors"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={0}
                >
                  <a className="px-3 py-2 pr-6 flex items-center text-md uppercase font-medium tracking-wide leading-wide text-gray-900 hover:opacity-75">
                    <span className="ml-2">Sponsors</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <button class="bg-red-500 hover:bg-red-700 text-white text-md font-medium uppercase tracking-wide py-2 px-4 rounded-md shadow-md">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
