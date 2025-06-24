import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/navbar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ClerkProvider {...pageProps}>
			<Navbar />
			<Component {...pageProps} />
		</ClerkProvider>
	);
}
