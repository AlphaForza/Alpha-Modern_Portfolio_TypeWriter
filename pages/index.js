import Head from "next/head";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alpha Portfolio</title>
        <meta name="description" content="Portfolio Alpha Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-[#030E21] w-full h-full ">
          <Navbar />
          <Intro />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
