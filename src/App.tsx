import GlowCursor from './components/GlowCursor';
import Projects from './components/Projects';
import NeonGame from './components/NeonGame';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Hero from './components/Hero';

export default function App() {
	return (
		<div>
			<GlowCursor />
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<NeonGame />
			<Contact />
		</div>
	);
}
