import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const links = ['about', 'skills', 'projects', 'game', 'contact'];

	return (
		<motion.nav
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
					<h1 className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
						Zakaria.dev
					</h1>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
					{links.map((item) => (
						<a
							key={item}
							href={`#${item}`}
							className="relative group hover:text-white transition">
							{item.charAt(0).toUpperCase() + item.slice(1)}

							<span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
						</a>
					))}
				</div>

				{/* Mobile Button */}
				<button
					onClick={() => setOpen(!open)}
					className="md:hidden text-cyan-400">
					{open ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.4 }}
						className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">
						<div className="flex flex-col px-6 py-6 space-y-6 text-gray-300">
							{links.map((item, i) => (
								<motion.a
									key={item}
									href={`#${item}`}
									onClick={() => setOpen(false)}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.05 }}
									className="text-lg font-medium hover:text-white">
									{item.charAt(0).toUpperCase() + item.slice(1)}
								</motion.a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
