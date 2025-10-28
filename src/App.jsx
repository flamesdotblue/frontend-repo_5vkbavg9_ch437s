import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import ContactFooter from './components/ContactFooter';

const BG = '#1B2539';

function App() {
  return (
    <div style={{ backgroundColor: BG }} className="min-h-screen">
      <Navbar />
      <Hero />
      <Sections />
      <ContactFooter />
    </div>
  );
}

export default App;
