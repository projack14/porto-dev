import { useEffect, useRef, useState } from 'react';

export default function NeonDodge() {
	const gameRef = useRef<HTMLDivElement>(null);
	const [playerX, setPlayerX] = useState(50);
	const [blocks, setBlocks] = useState<any[]>([]);
	const [playing, setPlaying] = useState(false);
	const [score, setScore] = useState(0);
	const [level, setLevel] = useState(1);
	const [high, setHigh] = useState<number>(
		() => Number(localStorage.getItem('dodge-high')) || 0
	);

	useEffect(() => {
		const move = (e: MouseEvent) => {
			const rect = gameRef.current?.getBoundingClientRect();
			if (!rect) return;
			const x = ((e.clientX - rect.left) / rect.width) * 100;
			setPlayerX(Math.max(0, Math.min(100, x)));
		};
		window.addEventListener('mousemove', move);
		return () => window.removeEventListener('mousemove', move);
	}, []);

	useEffect(() => {
		if (!playing) return;

		const interval = setInterval(() => {
			setBlocks((b) => [
				...b,
				{
					x: Math.random() * 90,
					y: -10,
					speed: 1 + level * 0.5,
				},
			]);
		}, 700 - level * 50);

		return () => clearInterval(interval);
	}, [playing, level]);

	useEffect(() => {
		if (!playing) return;

		const loop = setInterval(() => {
			setBlocks((b) =>
				b
					.map((block) => ({ ...block, y: block.y + block.speed }))
					.filter((block) => block.y < 100)
			);

			setScore((s) => s + 1);

			if (score % 500 === 0 && score !== 0) setLevel((l) => l + 1);

			// collision
			blocks.forEach((block) => {
				if (block.y > 80 && block.x > playerX - 5 && block.x < playerX + 5) {
					setPlaying(false);
					if (score > high) {
						setHigh(score);
						localStorage.setItem('dodge-high', String(score));
					}
				}
			});
		}, 20);

		return () => clearInterval(loop);
	}, [blocks, playerX, playing, score]);

	const start = () => {
		setBlocks([]);
		setScore(0);
		setLevel(1);
		setPlaying(true);
	};

	return (
		<section
			id="game"
			className="relative py-32 bg-[#020617]">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e940,transparent_70%)]" />

			<div className="relative max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
					Neon Dodge
				</h2>

				<div className="flex justify-center gap-8 text-cyan-300 mt-4">
					<div>Score: {score}</div>
					<div>Level: {level}</div>
					<div>High: {high}</div>
				</div>

				<div
					ref={gameRef}
					className="relative mt-10 h-[400px] bg-black/40 border border-cyan-400/30 rounded-xl overflow-hidden">
					{/* Player */}
					{playing && (
						<div
							className="absolute bottom-6 w-10 h-10 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]"
							style={{ left: `${playerX}%`, transform: 'translateX(-50%)' }}
						/>
					)}

					{/* Blocks */}
					{blocks.map((b, i) => (
						<div
							key={i}
							className="absolute w-10 h-10 bg-red-500 shadow-[0_0_20px_#ef4444]"
							style={{ left: `${b.x}%`, top: `${b.y}%` }}
						/>
					))}

					{!playing && (
						<div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
							<button
								onClick={start}
								className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl hover:scale-105 transition">
								Start Game
							</button>
							<p className="text-gray-400">Move mouse to dodge the blocks</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
