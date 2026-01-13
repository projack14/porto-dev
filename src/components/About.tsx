import { motion } from 'framer-motion';
import profile from '../assets/profile.webp';

export default function About() {
	return (
		<section
			id="about"
			className="relative py-32 px-6 bg-[#020617]">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
				{/* Foto */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="relative flex justify-center">
					<div className="absolute w-72 h-72 bg-cyan-500/20 blur-[100px] rounded-full" />
					<img
						src={profile}
						alt="Zakaria"
						className="relative w-80 h-80 object-cover rounded-2xl border border-white/10 shadow-xl"
					/>
				</motion.div>

				{/* Text */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="space-y-6">
					<h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
						About Me
					</h2>

					<p className="text-gray-400 leading-relaxed">
						Saya adalah seorang{' '}
						<span className="text-white">Frontend Web Developer</span> yang
						fokus membangun aplikasi web modern, cepat, dan scalable.
						Spesialisasi saya ada di React, TypeScript, dan sistem berbasis API.
					</p>

					<p className="text-gray-400 leading-relaxed">
						Selama ini saya banyak mengerjakan{' '}
						<span className="text-white">dashboard admin</span>, sistem KYC,
						payment, online-shop, tes psikologi dan aplikasi absensi — bukan
						sekadar landing page, tapi produk yang benar-benar dipakai user.
					</p>

					{/* Stats */}
					<div className="grid grid-cols-3 gap-6 pt-6">
						{[
							{ label: 'Projects', value: '10+' },
							{ label: 'Dashboards', value: '6+' },
							{ label: 'Years Exp', value: '2+' },
						].map((item) => (
							<div
								key={item.label}
								className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
								<div className="text-2xl font-bold text-cyan-400">
									{item.value}
								</div>
								<div className="text-sm text-gray-400">{item.label}</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
