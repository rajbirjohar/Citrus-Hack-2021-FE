import Image from "next/image";

import Particles from "react-tsparticles";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "",
            },
            position: {
              position: "center",
              repeat: "no-repeat",
              size: "100% 100%",
            },
          },
          fpsLimit: 30,
          backgroundMode: {
            enable: true,
            zIndex: -100,
          },
          interactivity: {
            detectsOn: "window",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: ["#ffc0cb", "#fc9aab", "#f78195"],
            },
            collisions: {
              enable: false,
            },
            position: {
              x: -100,
              y: 100,
            },
            move: {
              enable: true,
              speed: 0.55,
              direction: "bottom-right",
              random: true,
              straight: true,
              out_mode: "out",
              bounce: false,
              gravity: {
                acceleration: 9.8,
                enable: true,
                maxSpeed: 0.5,
              },
            },
            number: {
              density: {
                enable: true,
                value_area: 2000,
              },
              value: 30,
            },
            rotate: {
              random: {
                enable: true,
              },
              animation: {
                enable: true,
                speed: 15,
              },
              direction: "random",
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.2,
                maximumValue: 0.4,
              },
            },
            shape: {
              type: "circle",
              //   type: "image",
              //   image: {
              //     src: "/assets/leaf.png",
              //     width: 200,
              //     height: 200,
              //   },
            },
            size: {
              random: true,
              value: 15,
            },
          },
          detectRetina: true,
        }}
      />
      <section className="flex md:flex-row-reverse flex-col h-screen justify-center items-center">
        <div className="relative md:w-96 md:h-96 w-80 h-80">
          <Image
            src="/assets/citrushack.png"
            alt="Citrus Hack Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className=" space-y-4 md:text-right text-center">
          <h1 className="font-black text-red-900 uppercase tracking-widest md:text-6xl text-4xl sm:w-full">
            Citrus Hack
          </h1>
          <h3 className="font-medium uppercase md:text-lg text-md tracking-wide">
            Founder's Edition
          </h3>
          <h3 className="font-medium text-gray-900 uppercase md:text-lg text-md tracking-wide">
            Create your zen.
          </h3>
          <h3 className="font-medium text-gray-900 uppercase md:text-lg text-md tracking-wide">
            04 . 09 . 21
          </h3>
          <div className="md:space-x-4 md:space-y-0 space-x-0 space-y-4 flex md:flex-row flex-col">
            <button class="flex-1 bg-red-500 hover:bg-red-700 text-white font-medium uppercase tracking-wide py-2 px-4 rounded-md shadow-md">
              Sign Up
            </button>
            <Link
              activeClass="active"
              className="flex-1 flex"
              to="intro"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={0}
            >
              <button class="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium uppercase tracking-wide py-2 px-4 rounded-md shadow-md">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
