import Image from "next/image";
import { IoIosLock } from "react-icons/io";
import { BiHealth } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";

const Track = ({ title, caption, icon }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start px-6 py-10 bg-red-50 border-2 border-red-100 rounded-md space-y-4 w-full shadow-none hover-hover:hover:shadow-2xl transition duration-300 ease-in-out">
      <div>{icon}</div>
      <div className="space-y-4">
        <h1 className="md:text-3xl text-2xl font-semibold text-center text-gray-900">{title}</h1>
        <p className="md:text-lg text-md w-full text-gray-800">{caption}</p>
      </div>
    </div>
  );
};

export default function Tracks() {
  return (
    <section className="md:pt-48 py-24 flex flex-col items-center justify-center space-y-12">
      <h1 className="font-bold text-red-900 md:text-3xl text-2xl leading-loose tracking-wide uppercase">Choose your Track.</h1>
      <div className="flex md:flex-row flex-col items-center w-full md:space-x-4 md:space-y-0 space-x-0 space-y-4 items-stretch">
        <Track
          title="Security"
          caption="Projects entered in this category aim to help people feel secure. A sense of security can be the key to a zen state of mind."
          icon={<IoIosLock size={70} />}
        />
        <Track
          title="Wellness"
          caption="In this category, you will come up with a creative solution to improve the wellness of society. Last year was rough to both mental and physical health - let us get to healing."
          icon={<BiHealth size={70} />}
        />
        <Track
          title="Sustainability"
          caption="Projects in this category aim to protect the planet's natural treasures and help solve the planet's environmental issues. We have one planet. We need to treat it well."
          icon={<FaLeaf size={70} />}
        />
      </div>
    </section>
  );
}
