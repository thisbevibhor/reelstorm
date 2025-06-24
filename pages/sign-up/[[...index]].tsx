import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
	return (
		<main className="min-h-screen bg-black flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-xl">
				<h1 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
					Join ReelStorm
				</h1>
				<SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
			</div>
		</main>
	);
}
