import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
			{/* Background glow */}
			<div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full" />
			<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />

			{/* Grid */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

			{/* Content */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="relative z-10 text-center max-w-3xl px-6">
				<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
					<span className="bg-white/60 mr-3">Hi, I’m </span>
					<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
						Zakaria Saputra
					</span>
				</h1>

				<p className="mt-6 text-lg text-gray-400">
					Frontend Web Developer specialized in building modern, fast, and
					scalable web applications with React & TypeScript.
				</p>

				<div className="mt-10 flex justify-center gap-4">
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href="#projects"
						className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold shadow-lg shadow-cyan-500/30">
						View Projects
					</motion.a>

					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href="#contact"
						className="px-6 py-3 rounded-xl border border-white/20 text-white backdrop-blur hover:bg-white/10 transition">
						Contact Me
					</motion.a>
				</div>
			</motion.div>
		</section>
	);
}
