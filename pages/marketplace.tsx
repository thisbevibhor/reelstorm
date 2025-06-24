import Head from "next/head";
import Link from "next/link";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

<SignedOut>
	<Link href="/sign-in" className="text-sm text-white/70 underline hover:text-white">
		Sign In
	</Link>
</SignedOut>;

const creators = Array.from({ length: 10 }).map((_, index) => ({
	name: `Creator ${index + 1}`,
	role: ["Reel Editor", "Product Specialist", "Ad Designer", "Fashion Creator", "Tech Vlogger"][index % 5],
	bio: "Delivers top-tier creative content tailored for engagement and reach.",
	price: 100 + index * 10,
	rating: ["4.9", "4.8", "5.0", "4.6", "4.7", "4.8", "4.9", "5.0", "4.7", "4.6"][index],
	image: `/images/creators/creator${index + 1}.jpg`,
}));

export default function Marketplace() {
	return (
		<>
			<Head>
				<title>Marketplace | ReelStorm</title>
			</Head>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>

			<SignedIn>
				<main className="min-h-screen bg-black text-white px-4 py-16">
					<h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 text-transparent bg-clip-text">
						Explore Top Reel Creators
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
						{creators.map((creator, index) => {
							const finalPrice = Math.round(Number(creator.price) * 1.15);
							return (
								<Link key={index} href={`/creator/creator${index + 1}`}>
									<div className="bg-zinc-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-200 cursor-pointer hover:scale-[1.02]">
										<img src={creator.image} alt={creator.name} className="w-full h-64 object-cover rounded-lg mb-4" />
										<h2 className="text-xl font-semibold">{creator.name}</h2>
										<p className="text-sm text-white/60">{creator.role}</p>
										<p className="mt-2 text-sm text-white/80">{creator.bio}</p>
										<p className="mt-2 text-sm text-green-400 font-semibold">${finalPrice} USD</p>
										<div className="text-yellow-400 mt-1 text-sm">⭐ {creator.rating} / 5</div>
										<button
											className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg transition duration-300 hover:from-red-500 hover:to-orange-500"
											onClick={(e) => e.preventDefault()} // Prevents Link navigation when just clicking button
										>
											Book Now
										</button>
									</div>
								</Link>
							);
						})}
					</div>
				</main>
			</SignedIn>
		</>
	);
}
