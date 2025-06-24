import Link from "next/link";
import { useUser, SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { user } = useUser();

	const isCreator = user?.publicMetadata?.role === "creator";

	return (
		<nav className="bg-black border-b border-zinc-800 px-6 py-4 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 text-transparent bg-clip-text">
					ReelStorm
				</Link>

				{/* Hamburger (mobile only) */}
				<button onClick={() => setMenuOpen(!menuOpen)} className="text-white sm:hidden">
					☰
				</button>

				{/* Nav Links (desktop only) */}
				<div className="hidden sm:flex items-center gap-6">
					<Link
						href="/marketplace"
						className="text-sm font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text hover:scale-105 transition"
					>
						Explore Creators
					</Link>

					<Link
						href="/about"
						className="text-sm font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text hover:scale-105 transition"
					>
						About
					</Link>

					{isCreator && (
						<Link
							href="/dashboard"
							className="text-sm font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text hover:scale-105 transition"
						>
							Dashboard
						</Link>
					)}

					<SignedOut>
						<Link href="/sign-in" className="text-sm font-semibold text-white/70 underline hover:text-white">
							Sign In
						</Link>
					</SignedOut>

					<SignedIn>
						<UserButton afterSignOutUrl="/" />
					</SignedIn>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="sm:hidden mt-4 space-y-4">
					<Link href="/marketplace" className="block text-sm font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
						Explore Creators
					</Link>

					<Link href="/about" className="block text-sm font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
						About
					</Link>

					{isCreator && (
						<Link href="/dashboard" className="block text-sm font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
							Dashboard
						</Link>
					)}

					<SignedOut>
						<Link href="/sign-in" className="block text-sm text-white underline">
							Sign In
						</Link>
					</SignedOut>

					<SignedIn>
						<UserButton afterSignOutUrl="/" />
					</SignedIn>
				</div>
			)}
		</nav>
	);
}
