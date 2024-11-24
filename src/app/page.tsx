import Image from "next/image";
import Header from "./components/layout/Header";
import Profile from "./components/Profile";
import Blurbs from "./components/Blurbs";
import Projects from "./components/Projects";
import Weblinks from "./components/Weblinks";
import Interests from "./components/Interests";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="layout--main grid gap-4 p-2">
				<Profile />
				<Blurbs />
				<Projects />
				<Interests />
				<Weblinks />
			</main>
		</div>
	);
}
