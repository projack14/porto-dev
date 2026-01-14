import { motion } from 'framer-motion';
import {
	SiReact,
	SiTypescript,
	SiTailwindcss,
	SiVite,
	SiAntdesign,
	SiStripe,
	SiGooglemaps,
	SiFirebase,
	SiPostman,
} from 'react-icons/si';

const techStack = [
	{ name: 'React', icon: <SiReact /> },
	{ name: 'TypeScript', icon: <SiTypescript /> },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss /> },
	{ name: 'Vite', icon: <SiVite /> },
	{ name: 'Ant Design', icon: <SiAntdesign /> },
	{ name: 'REST API', icon: <SiPostman /> },
];

const systems = [
	{
		title: 'Payment Integration',
		desc: 'Midtrans / Stripe-style flows, invoicing, payment status, webhooks, and reconciliation',
		icon: <SiStripe />,
	},
	{
		title: 'KYC & Identity Verification',
		desc: 'ID upload, selfie verification, Dukcapil NIK validation, and approval workflows',
		icon: <SiFirebase />,
	},
	{
		title: 'Mapping & Geolocation',
		desc: 'Outlet locations, radius-based coverage, coordinates, and Google Maps API',
		icon: <SiGooglemaps />,
	},
	{
		title: 'Admin Dashboard',
		desc: 'User management, roles, pagination, filtering, and CSV export',
		icon: <SiReact />,
	},
	{
		title: 'Attendance System',
		desc: 'Class codes, validation, and attendance status (present, excused, absent)',
		icon: <SiTypescript />,
	},
	{
		title: 'Data Reporting',
		desc: 'Summaries, charts, PDF exports, and real-time APIs',
		icon: <SiPostman />,
	},
];

export default function Skills() {
	return (
		<section
			id="skills"
			className="relative py-32 bg-[#020617]">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e930,transparent_70%)]" />

			<div className="relative max-w-6xl mx-auto px-6 space-y-20">
				{/* Tech Stack */}
				<div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
						Tech Stack
					</motion.h2>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
						{techStack.map((skill, i) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.05 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 backdrop-blur hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition">
								<div className="text-4xl text-cyan-400">{skill.icon}</div>
								<p className="text-white font-medium">{skill.name}</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* What I Build */}
				<div>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl font-bold mb-10 text-white">
						What I Build
					</motion.h3>

					<div className="grid md:grid-cols-3 gap-8">
						{systems.map((item, i) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.08 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.03 }}
								className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 transition">
								<div className="text-3xl text-cyan-400 mb-4">{item.icon}</div>
								<h4 className="text-lg font-semibold text-white mb-2">
									{item.title}
								</h4>
								<p className="text-gray-400 text-sm leading-relaxed">
									{item.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
