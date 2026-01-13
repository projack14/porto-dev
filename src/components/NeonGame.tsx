import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NeonGame() {
	const [target, setTarget] = useState({ x: 50, y: 50 });
	const [score, setScore] = useState(0);
	const [time, setTime] = useState(30);
	const [playing, setPlaying] = useState(false);
	const [high, setHigh] = useState<number>(
		() => Number(localStorage.getItem('neon-high')) || 0
	);

	useEffect(() => {
		if (!playing) return;

		if (time <= 0) {
			setPlaying(false);
			if (score > high) {
				setHigh(score);
				localStorage.setItem('neon-high', String(score));
			}
			return;
		}

		const timer = setTimeout(() => setTime((t) => t - 1), 1000);
		return () => clearTimeout(timer);
	}, [time, playing]);

	const spawn = () => {
		setTarget({
			x: Math.random() * 80 + 10,
			y: Math.random() * 60 + 10,
		});
	};

	const hit = () => {
		setScore((s) => s + 1);
		spawn();
	};

	const start = () => {
		setScore(0);
		setTime(30);
		setPlaying(true);
		spawn();
	};

	return (
		<section
			id="game"
			className="relative py-32 bg-[#020617] overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e940,transparent_70%)]" />

			<div className="relative max-w-4xl mx-auto text-center px-6">
				<h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
					Neon Reflex
				</h2>
				<p className="text-gray-400 mt-2">
					Hit the glowing target as fast as you can
				</p>

				<div className="mt-8 flex justify-center gap-8 text-lg text-cyan-300">
					<div>Score: {score}</div>
					<div>Time: {time}s</div>
					<div>High: {high}</div>
				</div>

				<div className="relative mt-10 w-full h-[400px] border border-cyan-400/30 rounded-2xl bg-black/40 backdrop-blur overflow-hidden">
					{playing && (
						<motion.div
							onClick={hit}
							animate={{ left: `${target.x}%`, top: `${target.y}%` }}
							transition={{ type: 'spring', stiffness: 200 }}
							className="absolute w-16 h-16 rounded-full bg-cyan-400 blur-sm shadow-[0_0_40px_#22d3ee] cursor-pointer"
						/>
					)}

					{!playing && (
						<div className="absolute inset-0 flex items-center justify-center">
							<button
								onClick={start}
								className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition">
								Start Game
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
