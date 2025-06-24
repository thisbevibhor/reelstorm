import Link from "next/link";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function HeroParallax() {
	return (
		<div className="relative z-20 h-screen flex flex-col justify-center items-center text-center px-4">
			<h1 className="text-6xl sm:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 text-transparent bg-clip-text drop-shadow-xl">
				ReelStorm
			</h1>
			<p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
				Where brands meet creators for stunning video ads, reels, and social campaigns.
			</p>
			<Link href="/marketplace">
				<button className="mt-10 px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg animate-bounce hover:scale-110 transition duration-300 ease-in-out">
					Explore Creators
				</button>
			</Link>
		</div>
	);
}
