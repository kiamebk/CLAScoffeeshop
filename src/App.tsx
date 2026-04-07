/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Menu />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

