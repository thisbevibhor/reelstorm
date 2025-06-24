import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreatorProfile() {
	const router = useRouter();
	const { id } = router.query;

	const [showModal, setShowModal] = useState(false);
	const [startDate, setStartDate] = useState(new Date());

	// Generate mock creators dynamically
	const creators: Record<string, any> = {};

	for (let i = 1; i <= 10; i++) {
		creators[`creator${i}`] = {
			name: `Creator ${i}`,
			role: ["Reel Editor", "Product Specialist", "Ad Designer", "Fashion Creator", "Tech Vlogger"][i % 5],
			bio: `Creator ${i} specializes in high-performance reels and brand storytelling across platforms.`,
			image: `/images/creators/creator${i}.jpg`,
			rating: ["4.9", "4.8", "5.0", "4.6", "4.7", "4.8", "4.9", "5.0", "4.7", "4.6"][i - 1],
			price: 100 + i * 10,
			projects: [
				`/images/projects/p1.png`,
				`/images/projects/p2.png`,
				`/images/projects/p3.png`,
				`/images/projects/p4.png`,
				`/images/projects/p5.png`,
			],
		};
	}

	const creator = creators[id as string];
	if (!creator) return <p className="text-white p-8">Loading...</p>;

	const finalPrice = Math.round(creator.price * 1.15);

	return (
		<>
			<Head>
				<title>{creator.name} | ReelStorm</title>
			</Head>
			<main className="bg-black text-white min-h-screen px-6 py-12">
				<div className="max-w-5xl mx-auto">
					{/* Top Section */}
					<div className="flex flex-col md:flex-row gap-8 items-center">
						<img src={creator.image} alt={creator.name} className="w-64 h-64 object-cover rounded-xl shadow-lg" />
						<div>
							<h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 text-transparent bg-clip-text">
								{creator.name}
							</h1>
							<p className="text-white/60 text-lg mt-1">{creator.role}</p>
							<p className="mt-4 text-white/80">{creator.bio}</p>
							<p className="mt-3 text-green-400 font-semibold text-lg">${finalPrice} USD</p>
							<p className="text-yellow-400 text-sm mt-1">⭐ {creator.rating} / 5</p>
							<button
								onClick={() => setShowModal(true)}
								className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white hover:scale-105 transition"
							>
								Book Now
							</button>
						</div>
					</div>

					{/* Projects */}
					<div className="mt-12">
						<h2 className="text-2xl font-semibold mb-4">Top Projects</h2>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
							{creator.projects.map((img: string, i: number) => (
								<img key={i} src={img} alt={`Project ${i + 1}`} className="w-full h-48 object-cover rounded-md" />
							))}
						</div>
					</div>

					{/* Reviews */}
					<div className="mt-16">
						<h2 className="text-2xl font-semibold mb-4">What Clients Say</h2>
						<div className="space-y-6">
							{[
								{ name: "Sarah J.", review: "Amazing quality and super fast turnaround.", rating: 5 },
								{ name: "BrandX Agency", review: "Best creator we’ve worked with on Reels. Hands down.", rating: 4.8 },
								{ name: "Tom D.", review: "Clean edits, very collaborative and professional.", rating: 4.9 },
							].map((rev, i) => (
								<div key={i} className="bg-zinc-800 p-4 rounded-lg">
									<p className="text-sm text-white/80 italic">“{rev.review}”</p>
									<div className="mt-2 text-sm flex justify-between items-center">
										<span className="text-white/50">– {rev.name}</span>
										<span className="text-yellow-400">⭐ {rev.rating}</span>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Back to Marketplace */}
					<div className="mt-12 text-center">
						<a href="/marketplace" className="inline-block text-sm px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition">
							← Back to Marketplace
						</a>
					</div>
				</div>
			</main>

			{/* Booking Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
					<div className="bg-zinc-900 p-8 rounded-lg max-w-sm w-full shadow-2xl text-white relative">
						<h2 className="text-2xl font-bold mb-4">Book {creator.name}</h2>
						<label className="text-sm text-white/60 block mb-2">Select a date:</label>
						<DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} className="text-sm" minDate={new Date()} />

						<p className="text-white/80 text-sm mb-4">Booking will be confirmed after payment integration.</p>
						<button
							onClick={() => setShowModal(false)}
							className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 rounded-lg hover:scale-105 transition"
						>
							Close
						</button>
					</div>
				</div>
			)}
			{/* Contact Bubble */}
			<div className="fixed bottom-6 right-6 z-40">
				<button
					onClick={() => alert("Live chat feature coming soon")}
					className="bg-gradient-to-br from-purple-600 to-blue-600 hover:from-red-500 hover:to-orange-500 text-white px-4 py-3 rounded-full shadow-lg text-sm font-semibold"
				>
					💬 Chat with Us
				</button>
			</div>
		</>
	);
}
