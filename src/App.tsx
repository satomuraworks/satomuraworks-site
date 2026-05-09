import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Links } from './components/Links';
import { Works } from './components/Works';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <About />
        <Links />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
