import { motion } from 'framer-motion';
import tesman from '../assets/tesman.webp';
import astina from '../assets/astina.webp';
import superapps from '../assets/superapps.webp';
import sroja from '../assets/sroja.webp';

const projects = [
	{
		title: 'PSI SIM Online',
		desc: 'Sistem psikotes online untuk SIM berbasis web yang digunakan secara nasional.',
		image: tesman,
		link: 'https://tesman.psisimonline.id/',
	},
	{
		title: 'ASTINA Polri',
		desc: 'Dashboard administrasi dan manajemen data internal kepolisian.',
		image: astina,
		link: 'https://astina.polri.go.id/',
	},
	{
		title: 'SROJA Fashion',
		desc: 'E-commerce website untuk brand fashion dengan katalog, cart, dan checkout.',
		image: sroja,
		link: 'https://sroja.com/',
	},
	{
		title: 'Presisi Admin Polri',
		desc: 'Admin panel untuk sistem Presisi Polri: monitoring, approval, dan reporting.',
		image: superapps,
		link: 'https://presisi-admin.polri.go.id/',
	},
];

export default function Projects() {
	return (
		<section
			id="projects"
			className="relative py-32 bg-[#020617]">
			{/* background glow */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e930,transparent_70%)]" />

			<div className="relative max-w-7xl mx-auto px-6">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-4xl font-extrabold mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
					Real World Projects
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-10">
					{projects.map((p, i) => (
						<motion.a
							key={p.title}
							href={p.link}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02 }}
							className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 transition">
							{/* Cover with tech style + hover reveal */}
							<div className="relative h-64 overflow-hidden">
								{/* base image */}
								<img
									src={p.image}
									alt={p.title}
									className="w-full h-full object-cover grayscale brightness-50 contrast-125 scale-110 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-100"
								/>

								{/* neon overlay */}
								<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 to-blue-600/30 opacity-80 group-hover:opacity-0 transition duration-700" />

								{/* scanline effect */}
								<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] opacity-30" />
							</div>

							{/* dark gradient for text readability */}
							<div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

							{/* Content */}
							<div className="absolute bottom-0 p-6">
								<h3 className="text-xl font-semibold text-white">{p.title}</h3>
								<p className="text-sm text-gray-400 mt-2 max-w-md">{p.desc}</p>

								<div className="mt-4 text-cyan-400 font-medium group-hover:text-blue-400 transition">
									Visit Website →
								</div>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
