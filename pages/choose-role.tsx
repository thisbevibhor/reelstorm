import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ChooseRole() {
	const { user, isLoaded } = useUser();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (isLoaded && user?.publicMetadata?.role) {
			// If role already exists, redirect automatically
			const role = user.publicMetadata.role;
			if (role === "creator") router.push("/dashboard");
			else router.push("/marketplace");
		}
	}, [isLoaded, user, router]);

	const setRole = async (role: "creator" | "customer") => {
		if (!user) return;
		setLoading(true);
		try {
			await (user as any).update({
				publicMetadata: { role },
			});
			if (role === "creator") router.push("/dashboard");
			else router.push("/marketplace");
		} catch (error) {
			console.error("Failed to set role", error);
		} finally {
			setLoading(false);
		}
	};

	if (!isLoaded || loading) {
		return (
			<main className="min-h-screen bg-black flex items-center justify-center text-white">
				<p>Loading...</p>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-white">
			<h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 text-transparent bg-clip-text">
				Choose Your Role
			</h1>
			<div className="flex gap-6">
				<button
					onClick={() => setRole("creator")}
					className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105 transition"
				>
					🎥 I’m a Creator
				</button>
				<button
					onClick={() => setRole("customer")}
					className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition"
				>
					💼 I’m a Customer
				</button>
			</div>
		</main>
	);
}
