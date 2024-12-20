import React from "react";
import Link from "next/link";

const Projects = () => {
	return (
		<div className="widget widget--projects">
			<div className="widget__title bg-orange-200 p-1 text-red-500 font-semibold">
				shidee&apos;s Projects
			</div>
			<div className="p-1 pt-2 flex flex-col gap-1">
				<h4 className="font-semibold underline">
					<Link href={"https://fpl-24.vercel.app/"}>fpl-24</Link>
				</h4>
				<p className="max-w-prose font-mono text-xs">
					Fantasy premier league football dashboard using React and Next.js
					<br />
					<Link
						className="underline text-blue-400"
						href={"https://fpl-24.vercel.app/"}
					>
						fpl-24.vercel.app/
					</Link>
					<br />
					<Link
						href={"https://github.com/r-shidee/fpl-24"}
						className="underline text-blue-400"
					>
						https://github.com/r-shidee/fpl-24
					</Link>
				</p>
			</div>
			<div className="p-1 pt-2 flex flex-col gap-1">
				<h4 className="font-semibold underline">
					<Link href={"https://sxh-wedding-site.vercel.app/"}>sxh wedding</Link>
				</h4>
				<p className="max-w-prose font-mono text-xs">
					Created a website about my wedding to share with friends and family
					during covid-19.
					<br />
					<Link
						className="underline text-blue-400"
						href={"https://sxh-wedding-site.vercel.app/"}
					>
						sxh-wedding-site.vercel.app/
					</Link>
					<br />
					<Link
						href={"https://bitbucket.org/r_shidee/wedding-site/src"}
						className="underline text-blue-400"
					>
						https://bitbucket.org/r_shidee/wedding-site/
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Projects;
