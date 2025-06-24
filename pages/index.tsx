import Head from "next/head";
import StormEffect from "../components/StormEffect";
import HeroParallax from "../components/HeroParallax";

export default function Home() {
	return (
		<>
			<Head>
				<title>ReelStorm - Hire Reel Creators</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="relative min-h-screen bg-black text-white overflow-hidden">
				<StormEffect />
				<HeroParallax />
			</div>
		</>
	);
}
