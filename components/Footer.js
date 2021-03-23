export default function Footer() {
  return (
    <div className="footershadow">
      <footer className="w-full px-6 py-10 bg-black flex items-center justify-center">
        <div className="flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-x-0 space-y-4 max-w-4xl">
          <div className="flex-1">
            <h1 className="font-bold md:text-lg text-md text-white">
              Elsewhere
            </h1>
            <h2 className="font-md md:text-lg text-md text-white">
              Written by{" "}
              <a href="https://rajbirjohar.com" className="underline">
                Rajbir Johar
              </a>
              .
              <br />
              Like something you see? Let me know.
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-16 md:space-y-0 space-y-2">
              <div className="flex flex-col space-y-2 mt-2">
                <a
                  className="md:text-lg text-md text-white underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/r-jo"
                >
                  Github
                </a>
                <a
                  className="md:text-lg text-md text-white underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/rajbirjohar/"
                >
                  Linkedin
                </a>
                <a
                  className="md:text-lg text-md text-white underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/RajbirJohar"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-bold md:text-lg text-md text-white">
              Disclaimer
            </h1>
            <h2 className="font-md md:text-lg text-md text-white">
              Citrus Hack is an official hackathon run by the dedicated Citrus
              Hack Team. This website is meant to serve as a different version
              solely for portfolio reasons.
              <br />
              <br />
              Founder's Edition stands for Rajbir's vision with him being the
              first writer of the original website.
              <br />
              <br />
              All logos/trademarks belong to their respective companies and
              nothing is being used for commercial gain.
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
}
