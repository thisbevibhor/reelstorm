import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
	return (
		<main className="min-h-screen bg-black flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-xl">
				<h1 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-purple-400 to-green-400 text-transparent bg-clip-text">
					Welcome Back Vibhor
				</h1>
				<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
			</div>
		</main>
	);
}
