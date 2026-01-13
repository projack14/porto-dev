import { useEffect, useState } from 'react';

export default function GlowCursor() {
	const [pos, setPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const move = (e: MouseEvent) => {
			setPos({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', move);
		return () => window.removeEventListener('mousemove', move);
	}, []);

	return (
		<div
			className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-screen"
			style={{
				transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)`,
			}}>
			<div className="w-[200px] h-[200px] rounded-full bg-cyan-400 opacity-20 blur-3xl animate-pulse" />
		</div>
	);
}
