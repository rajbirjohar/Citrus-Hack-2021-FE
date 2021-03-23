import Head from "next/head";
import Container from "../components/Container";

import { Element } from "react-scroll";

import Hero from "./hero";
import Intro from "./intro";
import Tracks from "./tracks";
import Sponsors from "./sponsors"

export default function Home() {
  return (
    <Container main>
      <div className="max-w-6xl mx-auto">
        <Element name="hero" className="section">
          <Hero />
        </Element>
        <Element name="intro" className="section">
          <Intro />
        </Element>
        <Element name="tracks" className="section">
          <Tracks />
        </Element>
        <Element name="sponsors" className="section">
          <Sponsors />
        </Element>
      </div>
    </Container>
  );
}
