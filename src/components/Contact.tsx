import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Contact() {
	return (
		<section
			id="contact"
			className="relative py-32 bg-[#020617] overflow-hidden">
			{/* Background glow */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0ea5e930,transparent_70%)]" />

			<div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
				{/* Left text */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}>
					<h2 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
						Let’s build <br /> something impactful.
					</h2>

					<p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
						If you are building a serious product, startup, or government-grade
						system and need a frontend engineer who understands UI, UX, data,
						and performance — this is where we connect.
					</p>

					<p className="mt-6 text-gray-500">
						Available for freelance, contract, and long-term collaboration.
					</p>
				</motion.div>

				{/* Contact Card */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl shadow-cyan-500/10">
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 blur-2xl" />

					<h3 className="relative text-2xl font-semibold text-white mb-8">
						Connect with me
					</h3>

					<div className="relative space-y-5">
						{/* Email */}
						<a
							href="mailto:zakaria.zrs14@gmail.com"
							className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 transition">
							<Mail className="text-cyan-400 group-hover:scale-110 transition" />
							<span className="text-gray-300 group-hover:text-white">
								zakaria.zrs14@gmail.com
							</span>
						</a>

						{/* Github */}
						<a
							href="https://github.com/projack14"
							target="_blank"
							className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 transition">
							<Github className="text-cyan-400 group-hover:scale-110 transition" />
							<span className="text-gray-300 group-hover:text-white">
								projack14
							</span>
						</a>

						{/* Linkedin */}
						<a
							href="https://linkedin.com/in/zakaria-saputra"
							target="_blank"
							className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 transition">
							<Linkedin className="text-cyan-400 group-hover:scale-110 transition" />
							<span className="text-gray-300 group-hover:text-white">
								Zakaria Saputra
							</span>
						</a>

						{/* Instagram */}
						<a
							href="https://instagram.com/haijack__"
							target="_blank"
							className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 transition">
							<Instagram className="text-cyan-400 group-hover:scale-110 transition" />
							<span className="text-gray-300 group-hover:text-white">
								@haijack__
							</span>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
