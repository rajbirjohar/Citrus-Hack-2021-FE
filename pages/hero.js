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
      <section className="flex h-screen md:justify-end justify-center items-center">
        <div className=" space-y-4 md:text-right text-center">
          <h1 className="font-black text-red-900 uppercase tracking-widest md:text-6xl text-4xl">Citrus Hack</h1>
          <h3 className="font-medium uppercase md:text-lg text-md tracking-wide">
            Founder's Edition
          </h3>
          <h3 className="font-medium text-gray-900 uppercase md:text-lg text-md tracking-wide">Create your zen.</h3>
          <h3 className="font-medium text-gray-900 uppercase md:text-lg text-md tracking-wide">04 . 09 . 21</h3>
          <div className="space-x-4 flex">
            <button class="flex-1 bg-red-500 hover:bg-red-700 text-white font-medium uppercase tracking-wide py-2 px-4 rounded-md shadow-md">
              Sign Up
            </button>

            <button class="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium uppercase tracking-wide py-2 px-4 rounded-md shadow-md">
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={0}
              >
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
