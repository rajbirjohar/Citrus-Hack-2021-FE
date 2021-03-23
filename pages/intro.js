export default function Intro() {
  return (
    <section className="md:pt-48 py-24 flex md:flex-row flex-col items-center md:space-x-8 md:space-y-0 space-y-8">
      <div className="md:flex-1 space-y-4">
        <h1 className="font-bold text-red-900 md:text-3xl text-2xl leading-loose tracking-wide uppercase">
          Largest Hackathon UCR Offers.
        </h1>
        <h2 className="md:text-2xl text-xl leading-relaxed text-gray-900">
          Citrus Hack is where hundreds of students from all over the world come
          together and form teams, aiming to build a project from scratch in
          just 36 hours.
        </h2>
        <h2 className="md:text-2xl text-xl leading-relaxed text-gray-900">
          This year, Citrus Hack will be held virtually, open to undergraduate
          and high school students all around the world!
        </h2>
      </div>
      <div className="flex-col text-center md:flex-1 space-y-4 w-full">
        <h1 className="tracking-widest uppercase text-white py-10 md:text-2xl text-xl stroke">
          500+ Hackers
        </h1>
        <h1 className="tracking-widest uppercase text-white py-10 md:text-2xl text-xl stroke">
          36 Hours
        </h1>
        <h1 className="tracking-widest uppercase text-white py-10 md:text-2xl text-xl stroke">
          $15k In Prizes
        </h1>
      </div>
    </section>
  );
}
