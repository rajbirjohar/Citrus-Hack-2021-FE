import Image from "next/image";
import Link from "next/link";

const Logo = ({ image, hyper, description }) => {
  return (
    <a href={hyper}>
      <div className="md:w-56 md:h-56 w-48 h-48 relative items-center justify-center">
        <Image
          src={image}
          alt={description}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </a>
  );
};

export default function Sponsors() {
  return (
    <>
      <section className="md:flex justify-center items-center md:pt-48">
        <div className=" space-y-4 text-center">
          <h1 class="font-bold text-red-900 md:text-3xl text-2xl leading-loose tracking-wide uppercase text-center">
            Notable Mentions.
          </h1>
          <h2 className="md:text-xl text-gray-900 text-lg tracking-wide">
            Here are those who helped us create a zen experience.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full items-center justify-center">
            <Logo
              image="/logos/amazon.png"
              description="Amazon Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/twillio.png"
              description="Twilio Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/sketch.png"
              description="sketch Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/digitalocean.png"
              description="Digital Ocean Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/balsamiq.png"
              description="Balsamiq Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/launchpad.png"
              description="Blackstone Launchpad Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/linode.png"
              description="Linode Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/wolfram.png"
              description="Wolfram Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/1517.png"
              description="1517 Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/acm_ucr.png"
              description="acm Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/IEEE.png"
              description="IEEE Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/gcap.png"
              description="gcap Logo"
              hyper="https://www.amazon.com"
            />
            <Logo
              image="/logos/usaf.png"
              description="USAF Logo"
              hyper="https://www.amazon.com"
            />
          </div>
          <h2 className="md:text-xl text-gray-900 text-lg mb-24">
            These logos belong to the original companies that sponsored{" "}
            <Link href="https://citrushack.com">
              <a className="underline">Citrus Hack 2021</a>
            </Link>
            . <br />
            <br /> None of them are being used for commercial gain.
          </h2>
        </div>
      </section>
      <section className="flex py-36 justify-center items-center">
        <div className=" space-y-4">
          <h1 class="font-bold text-red-900 md:text-3xl text-2xl leading-loose tracking-wide uppercase text-center">
            Get Involved.
          </h1>
          <h2 className="md:text-xl text-gray-900 text-lg tracking-wide">
            Want to participate but not as a hacker? Come help us create zen.
          </h2>
          <div className="space-x-4 flex">
            <button class="flex-1 bg-green-300 hover:bg-green-400 text-gray-900 font-medium uppercase tracking-wide py-2 px-4 rounded-md shadow-md">
              Volunteer
            </button>
            <button class="flex-1 bg-yellow-200 hover:bg-yellow-300 text-gray-900 font-medium uppercase tracking-wide py-2 px-4 rounded-md shadow-md">
              Mentor
            </button>
            <button class="flex-1 bg-pink-200 hover:bg-pink-300 text-gray-900 font-medium uppercase tracking-wide py-2 px-4 rounded-md shadow-md">
              Sponsors
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
