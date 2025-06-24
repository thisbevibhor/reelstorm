import { useEffect } from "react";

export default function StormEffect() {
	useEffect(() => {
		const flash = () => {
			const el = document.getElementById("storm-overlay");
			if (el) {
				el.classList.add("flash");
				setTimeout(() => el.classList.remove("flash"), 200);
			}
		};
		const interval = setInterval(flash, Math.random() * 5000 + 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			id="storm-overlay"
			className="pointer-events-none fixed inset-0 z-10 bg-white opacity-0 transition duration-200 ease-in-out"
			style={{ mixBlendMode: "overlay" }}
		/>
	);
}
